const API_BASE = "https://pokeapi.co/api/v2";
const OFFICIAL_ARTWORK = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const THEME_KEY = "pokedex-theme";
const TEAM_KEY = "pokedex-team";
const TEAM_LIMIT = 6;
const RESOURCE_PAGE_SIZE = 60;

function $(id) {
  return document.getElementById(id);
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = String(str ?? "");
  return div.innerHTML;
}

function humanize(str) {
  return String(str ?? "").replace(/-/g, " ");
}

function parseExactNumericQuery(query) {
  if (!/^\d+$/.test(query)) return null;
  const value = Number(query);
  return Number.isInteger(value) && value > 0 ? value : null;
}

function extractIdFromUrl(listUrl) {
  const parts = listUrl.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
}

function normalizePokemon(data) {
  const id = data.id;
  const name = data.name;
  const types = (data.types || [])
    .sort((a, b) => a.slot - b.slot)
    .map((t) => t.type.name);
  return {
    id,
    name,
    types,
    artworkUrl: OFFICIAL_ARTWORK(id),
    raw: data,
  };
}

function loadTeamFromStorage() {
  try {
    const raw = localStorage.getItem(TEAM_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const normalized = [];
    for (const entry of parsed) {
      if (Number.isInteger(entry)) {
        normalized.push({ id: entry, nickname: "" });
        continue;
      }
      if (!entry || typeof entry !== "object") continue;
      const id = Number(entry.id);
      if (!Number.isInteger(id) || id <= 0) continue;
      const nickname = typeof entry.nickname === "string" ? entry.nickname.trim() : "";
      normalized.push({ id, nickname });
    }
    return normalized.slice(0, TEAM_LIMIT);
  } catch {
    return [];
  }
}

function persistTeam(team) {
  localStorage.setItem(TEAM_KEY, JSON.stringify(team));
}

function initTheme() {
  const toggle = $("theme-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    document.documentElement.setAttribute("data-theme", stored);
  }

  toggle.addEventListener("click", () => {
    const attr = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effectiveDark = attr === "dark" || (!attr && prefersDark);
    const next = effectiveDark ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  });
}

function initInicioPage() {
  const grid = $("pokemon-grid");
  const sentinel = $("sentinel");
  const search = $("search-input");
  const errorBanner = $("error-banner");
  const modal = $("modal");
  const modalOverlay = $("modal-overlay");
  const modalContent = $("modal-content");
  const modalClose = $("modal-close");
  if (!grid || !sentinel || !search || !errorBanner || !modal || !modalOverlay || !modalContent || !modalClose) return;

  const state = {
    offset: 0,
    limit: 20,
    isLoading: false,
    hasMore: true,
    pokemonList: [],
    detailCache: new Map(),
    searchTerm: "",
    openTrigger: null,
    searchRequestId: 0,
    fallbackSearchId: null,
    team: loadTeamFromStorage(),
  };
  const fallbackSection = document.createElement("section");
  fallbackSection.hidden = true;
  fallbackSection.setAttribute("aria-live", "polite");
  const fallbackStatus = document.createElement("p");
  fallbackStatus.className = "empty-state";
  fallbackStatus.textContent = "";
  const fallbackGrid = document.createElement("div");
  fallbackGrid.className = "pokemon-grid";
  fallbackGrid.setAttribute("role", "list");
  fallbackGrid.setAttribute("aria-label", "Resultado de búsqueda");
  fallbackSection.appendChild(fallbackStatus);
  fallbackSection.appendChild(fallbackGrid);
  grid.parentNode.insertBefore(fallbackSection, grid);

  function showError(message) {
    errorBanner.textContent = message;
    errorBanner.hidden = false;
  }

  function hideError() {
    errorBanner.hidden = true;
    errorBanner.textContent = "";
  }

  function renderSkeletons(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
      const div = document.createElement("div");
      div.className = "skeleton-card";
      div.innerHTML = `
        <div class="skeleton-card__inner">
          <div class="skeleton-block skeleton-avatar" aria-hidden="true"></div>
          <div class="skeleton-lines">
            <div class="skeleton-block skeleton-line skeleton-line--short" aria-hidden="true"></div>
            <div class="skeleton-block skeleton-line" aria-hidden="true"></div>
            <div class="skeleton-block skeleton-line" style="width:70%" aria-hidden="true"></div>
          </div>
        </div>
      `;
      frag.appendChild(div);
    }
    grid.appendChild(frag);
  }

  function removeSkeletons() {
    grid.querySelectorAll(".skeleton-card").forEach((n) => n.remove());
  }

  function isInTeam(id) {
    return state.team.some((entry) => entry.id === id);
  }

  function setTeamActionLabel(button, id) {
    const inTeam = isInTeam(id);
    button.setAttribute("data-team-action", inTeam ? "remove" : "add");
    button.textContent = inTeam ? "Quitar del equipo" : "Agregar al equipo";
  }

  function createCardElement(pokemon) {
    const article = document.createElement("article");
    article.className = "pokemon-card";
    article.dataset.name = pokemon.name.toLowerCase();
    article.dataset.id = String(pokemon.id);
    const typesHtml = pokemon.types
      .map((t) => `<span class="type-badge type-${t}">${escapeHtml(t)}</span>`)
      .join("");

    article.innerHTML = `
      <div class="pokemon-card__inner">
        <div class="pokemon-card__art">
          <img src="${pokemon.artworkUrl}" alt="Arte oficial de ${escapeHtml(pokemon.name)}" width="88" height="88" loading="lazy" decoding="async" />
        </div>
        <div class="pokemon-card__body">
          <span class="pokemon-card__id">#${String(pokemon.id).padStart(4, "0")}</span>
          <h2 class="pokemon-card__name">${escapeHtml(pokemon.name)}</h2>
          <div class="pokemon-card__types">${typesHtml}</div>
          <button type="button" class="btn-details" data-id="${pokemon.id}">Ver más</button>
        </div>
      </div>
    `;
    return article;
  }

  function appendCardsForIds(ids, prepend = false) {
    const frag = document.createDocumentFragment();
    for (const id of ids) {
      if (grid.querySelector(`.pokemon-card[data-id="${id}"]`)) continue;
      const raw = state.detailCache.get(id);
      if (!raw) continue;
      frag.appendChild(createCardElement(normalizePokemon(raw)));
    }
    if (prepend) {
      grid.prepend(frag);
    } else {
      grid.appendChild(frag);
    }
  }

  function setFallbackSearchResult(rawData, query) {
    const pokemon = normalizePokemon(rawData);
    fallbackGrid.innerHTML = "";
    fallbackGrid.appendChild(createCardElement(pokemon));
    fallbackStatus.textContent = `Resultado exacto para "${query}": ${humanize(pokemon.name)} (#${pokemon.id}).`;
    fallbackSection.hidden = false;
    state.fallbackSearchId = pokemon.id;
    grid.hidden = true;
    sentinel.hidden = true;
  }

  function clearFallbackSearchResult() {
    state.fallbackSearchId = null;
    fallbackGrid.innerHTML = "";
    fallbackStatus.textContent = "";
    fallbackSection.hidden = true;
    grid.hidden = false;
    sentinel.hidden = false;
  }

  function applySearchFilter() {
    const q = state.searchTerm.trim().toLowerCase();
    const numericId = parseExactNumericQuery(q);
    const cards = Array.from(grid.querySelectorAll(".pokemon-card"));
    let visible = 0;

    for (const card of cards) {
      const name = card.dataset.name || "";
      const id = Number(card.dataset.id || 0);
      const match = !q ? true : numericId !== null ? id === numericId : name.includes(q);
      card.classList.toggle("pokemon-card--hidden", !match);
      if (match) visible += 1;
    }

    let empty = grid.querySelector(".empty-state");
    if (q && cards.length > 0 && visible === 0) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "empty-state";
        empty.setAttribute("role", "status");
        grid.appendChild(empty);
      }
      empty.textContent = "Sin coincidencias locales. Buscando en la API…";
    } else if (empty) {
      empty.remove();
    }
    return { cardsCount: cards.length, visible };
  }

  async function loadNextBatch() {
    if (state.isLoading || !state.hasMore || state.searchTerm) return;
    state.isLoading = true;
    hideError();
    renderSkeletons(state.limit);

    try {
      const listData = await fetchJson(
        `${API_BASE}/pokemon?offset=${state.offset}&limit=${state.limit}`
      );
      const results = listData.results || [];
      if (results.length === 0) {
        state.hasMore = false;
        return;
      }

      const ids = results.map((r) => extractIdFromUrl(r.url));
      const settled = await Promise.all(
        ids.map(async (id) => {
          try {
            if (!state.detailCache.has(id)) {
              const detail = await fetchJson(`${API_BASE}/pokemon/${id}`);
              state.detailCache.set(id, detail);
            }
            return id;
          } catch {
            return null;
          }
        })
      );
      const okIds = settled.filter((id) => id !== null);
      const newIds = okIds.filter((id) => !state.pokemonList.includes(id));
      for (const id of newIds) state.pokemonList.push(id);
      appendCardsForIds(newIds, false);
      applySearchFilter();

      state.offset += state.limit;
      if (results.length < state.limit) state.hasMore = false;
    } catch (e) {
      showError("No se pudieron cargar más Pokémon. Verifica tu conexión.");
      console.error(e);
    } finally {
      removeSkeletons();
      state.isLoading = false;
    }
  }

  async function ensureSearchResultFromApi(query, requestId) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return;

    try {
      const data = await fetchJson(`${API_BASE}/pokemon/${encodeURIComponent(normalized)}`);
      if (requestId !== state.searchRequestId) return;

      const id = data.id;
      state.detailCache.set(id, data);
      const localCard = grid.querySelector(`.pokemon-card[data-id="${id}"]`);
      if (localCard) {
        clearFallbackSearchResult();
        applySearchFilter();
      } else {
        setFallbackSearchResult(data, query);
      }
      hideError();
    } catch (e) {
      if (requestId !== state.searchRequestId) return;
      clearFallbackSearchResult();
      if (e && e.status === 404) {
        showError(`No se encontró ningún Pokémon con "${query}".`);
      } else {
        showError("Error de red al buscar en la API. Intenta de nuevo.");
      }
    }
  }

  function addToTeam(id) {
    if (isInTeam(id)) return;
    if (state.team.length >= TEAM_LIMIT) {
      showError(`Tu equipo ya tiene ${TEAM_LIMIT} Pokémon.`);
      return;
    }
    state.team.push({ id, nickname: "" });
    persistTeam(state.team);
    hideError();
    document.querySelectorAll(`[data-id="${id}"][data-team-action]`).forEach((btn) => {
      setTeamActionLabel(btn, id);
    });
  }

  function removeFromTeam(id) {
    const next = state.team.filter((entry) => entry.id !== id);
    if (next.length === state.team.length) return;
    state.team = next;
    persistTeam(state.team);
    hideError();
    document.querySelectorAll(`[data-id="${id}"][data-team-action]`).forEach((btn) => {
      setTeamActionLabel(btn, id);
    });
  }

  function renderModalDetail(data) {
    const pokemon = normalizePokemon(data);
    const typesHtml = pokemon.types
      .map((t) => `<span class="type-badge type-${t}">${escapeHtml(t)}</span>`)
      .join("");

    const statsHtml = (data.stats || [])
      .map((s) => {
        const base = s.base_stat;
        const pct = Math.min(100, Math.round((base / 255) * 100));
        return `
          <div class="stat-row">
            <span class="stat-name">${escapeHtml(s.stat.name.slice(0, 3).toUpperCase())}</span>
            <div class="stat-bar-wrap"><div class="stat-bar" style="width:${pct}%"></div></div>
            <span class="stat-value">${base}</span>
          </div>
        `;
      })
      .join("");

    const moveNames = (data.moves || []).slice(0, 12).map((m) => m.move.name);
    const movesHtml =
      moveNames.length > 0
        ? `<ul class="abilities-list">${moveNames
            .map((name) => `<li class="ability-pill">${escapeHtml(humanize(name))}</li>`)
            .join("")}</ul>`
        : '<p class="modal-meta">Sin movimientos listados.</p>';

    const itemNames = (data.held_items || []).map((itemData) => itemData.item.name);
    const itemsHtml =
      itemNames.length > 0
        ? `<ul class="abilities-list">${itemNames
            .map((name) => `<li class="ability-pill">${escapeHtml(humanize(name))}</li>`)
            .join("")}</ul>`
        : '<p class="modal-meta">Sin ítems relacionados en la API.</p>';

    modalContent.innerHTML = `
      <div class="modal-hero">
        <img src="${pokemon.artworkUrl}" alt="Arte oficial de ${escapeHtml(pokemon.name)}" width="220" height="220" />
        <div class="modal-title-row">
          <h2 id="modal-title">${escapeHtml(pokemon.name)}</h2>
          <span class="modal-id">#${String(pokemon.id).padStart(4, "0")}</span>
        </div>
        <div class="modal-types">${typesHtml}</div>
        <button type="button" class="btn-team" data-team-action="${isInTeam(pokemon.id) ? "remove" : "add"}" data-id="${pokemon.id}">
          ${isInTeam(pokemon.id) ? "Quitar del equipo" : "Agregar al equipo"}
        </button>
      </div>
      <h3 class="modal-section-title">Estadísticas base</h3>
      ${statsHtml}
      <h3 class="modal-section-title">Movimientos (primeros 12)</h3>
      ${movesHtml}
      <h3 class="modal-section-title">Ítems relacionados</h3>
      ${itemsHtml}
    `;
  }

  async function openModal(id) {
    state.openTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalContent.innerHTML = '<p class="modal-loading">Cargando detalle…</p>';
    modal.hidden = false;
    modalOverlay.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
      modalOverlay.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
    modalClose.focus();

    try {
      let data = state.detailCache.get(id);
      if (!data) {
        data = await fetchJson(`${API_BASE}/pokemon/${id}`);
        state.detailCache.set(id, data);
      }
      renderModalDetail(data);
    } catch (e) {
      modalContent.innerHTML = '<p class="modal-error">No se pudo cargar el detalle.</p>';
      console.error(e);
    }
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    const trigger = state.openTrigger;
    state.openTrigger = null;
    setTimeout(() => {
      modal.hidden = true;
      modalOverlay.hidden = true;
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    }, 280);
  }

  search.addEventListener("input", () => {
    state.searchTerm = search.value.trim();
    state.searchRequestId += 1;
    const requestId = state.searchRequestId;
    clearFallbackSearchResult();
    hideError();
    const result = applySearchFilter();
    if (!state.searchTerm) return;
    if (result.visible > 0) return;
    ensureSearchResultFromApi(state.searchTerm, requestId);
  });

  grid.addEventListener("click", (e) => {
    const details = e.target.closest(".btn-details");
    if (details) {
      const id = Number(details.getAttribute("data-id"));
      if (Number.isInteger(id) && id > 0) openModal(id);
      return;
    }
  });

  fallbackGrid.addEventListener("click", (e) => {
    const details = e.target.closest(".btn-details");
    if (!details) return;
    const id = Number(details.getAttribute("data-id"));
    if (Number.isInteger(id) && id > 0) openModal(id);
  });

  modal.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-team-action][data-id]");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    if (!Number.isInteger(id) || id <= 0) return;
    const action = btn.getAttribute("data-team-action");
    if (action === "remove") removeFromTeam(id);
    else addToTeam(id);
    setTeamActionLabel(btn, id);
  });

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !state.searchTerm) loadNextBatch();
      }
    },
    { root: null, rootMargin: "200px", threshold: 0 }
  );
  observer.observe(sentinel);
  loadNextBatch();
}

function initResourcePage(type) {
  const isMoves = type === "moves";
  const input = isMoves ? $("moves-search-input") : $("items-search-input");
  const list = isMoves ? $("moves-results") : $("items-results");
  const status = isMoves ? $("moves-status") : $("items-status");
  if (!input || !list || !status) return;

  const noun = isMoves ? "movimientos" : "ítems";
  const nounSingular = isMoves ? "movimiento" : "ítem";
  const endpoint = isMoves ? "move" : "item";
  const state = {
    entries: [],
    filteredEntries: [],
    detailCache: new Map(),
    offset: 0,
    hasMore: true,
    isLoading: false,
    query: "",
    requestId: 0,
    openTrigger: null,
  };

  const actions = document.createElement("div");
  actions.className = "resource-actions";
  const loadMoreButton = document.createElement("button");
  loadMoreButton.type = "button";
  loadMoreButton.className = "resource-load-more";
  loadMoreButton.textContent = "Cargar más";
  actions.appendChild(loadMoreButton);
  list.insertAdjacentElement("afterend", actions);

  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  modalOverlay.hidden = true;
  const modal = document.createElement("section");
  modal.className = "modal resource-detail-modal glass-panel";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "resource-detail-title");
  modal.innerHTML = `
    <button type="button" class="modal-close" aria-label="Cerrar detalle">×</button>
    <div class="modal-content"></div>
  `;
  document.body.appendChild(modalOverlay);
  document.body.appendChild(modal);
  const modalClose = modal.querySelector(".modal-close");
  const modalContent = modal.querySelector(".modal-content");

  function effectText(entries, fallbackText) {
    const effectEntry = (entries || []).find((entry) => entry.language?.name === "es")
      || (entries || []).find((entry) => entry.language?.name === "en")
      || null;
    const text = effectEntry?.short_effect || effectEntry?.effect || "";
    return text ? escapeHtml(text.replace(/\$effect_chance/g, "N/A")) : fallbackText;
  }

  function toResourceEntry(rawEntry) {
    return {
      id: extractIdFromUrl(rawEntry.url),
      name: rawEntry.name,
    };
  }

  function sortedEntries(entries) {
    return [...entries].sort((a, b) => a.id - b.id);
  }

  function renderList(entries) {
    if (!entries.length) {
      list.innerHTML = `
        <li class="resource-empty" role="status">
          No hay ${noun} para mostrar con los filtros actuales.
        </li>
      `;
      return;
    }

    list.innerHTML = entries
      .map(
        (entry) => `
          <li class="resource-item">
            <button type="button" class="resource-item-btn" data-resource-id="${entry.id}">
              <span class="resource-item__name">${escapeHtml(humanize(entry.name))}</span>
              <span class="resource-item__id">#${String(entry.id).padStart(4, "0")}</span>
            </button>
          </li>
        `
      )
      .join("");
  }

  function updateStatus() {
    const shown = state.filteredEntries.length;
    const loaded = state.entries.length;
    const totalLabel = state.hasMore ? `${loaded}+` : String(loaded);
    if (state.query) {
      status.textContent = shown
        ? `Se muestran ${shown} ${noun} para "${state.query}".`
        : `Sin coincidencias locales para "${state.query}".`;
      return;
    }
    status.textContent = `Mostrando ${shown} ${noun}. Catálogo cargado: ${totalLabel}.`;
  }

  function refreshView() {
    const query = state.query;
    const numericId = parseExactNumericQuery(query);
    if (!query) {
      state.filteredEntries = sortedEntries(state.entries);
    } else {
      state.filteredEntries = sortedEntries(
        state.entries.filter((entry) =>
          numericId !== null ? entry.id === numericId : entry.name.includes(query)
        )
      );
    }
    renderList(state.filteredEntries);
    updateStatus();
    loadMoreButton.hidden = !state.hasMore || Boolean(query);
    loadMoreButton.disabled = state.isLoading;
    loadMoreButton.textContent = state.isLoading ? "Cargando..." : "Cargar más";
  }

  async function loadMoreEntries() {
    if (state.isLoading || !state.hasMore) return;
    state.isLoading = true;
    refreshView();
    try {
      const data = await fetchJson(
        `${API_BASE}/${endpoint}?offset=${state.offset}&limit=${RESOURCE_PAGE_SIZE}`
      );
      const results = (data.results || [])
        .map(toResourceEntry)
        .filter((entry) => Number.isInteger(entry.id) && entry.id > 0);
      const seen = new Set(state.entries.map((entry) => entry.id));
      for (const entry of results) {
        if (!seen.has(entry.id)) state.entries.push(entry);
      }
      state.offset += RESOURCE_PAGE_SIZE;
      state.hasMore = Boolean(data.next);
      refreshView();
    } catch (e) {
      status.textContent = `No se pudieron cargar más ${noun}.`;
      console.error(e);
    } finally {
      state.isLoading = false;
      refreshView();
    }
  }

  function closeDetail() {
    modal.classList.remove("is-open");
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    const trigger = state.openTrigger;
    state.openTrigger = null;
    setTimeout(() => {
      modal.hidden = true;
      modalOverlay.hidden = true;
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    }, 280);
  }

  function renderMoveDetail(detail) {
    const typeValue = detail.type?.name ? humanize(detail.type.name) : "No disponible";
    const damageClass = detail.damage_class?.name ? humanize(detail.damage_class.name) : "No disponible";
    const power = Number.isInteger(detail.power) ? detail.power : "No disponible";
    const accuracy = Number.isInteger(detail.accuracy) ? `${detail.accuracy}%` : "No disponible";
    const pp = Number.isInteger(detail.pp) ? detail.pp : "No disponible";
    const priority = Number.isInteger(detail.priority) ? detail.priority : "No disponible";
    const shortEffect = effectText(detail.effect_entries, "Sin efecto registrado.");
    modalContent.innerHTML = `
      <div class="resource-detail">
        <div class="resource-detail__heading">
          <h2 id="resource-detail-title">${escapeHtml(humanize(detail.name))}</h2>
          <span class="resource-detail__id">#${String(detail.id).padStart(4, "0")}</span>
        </div>
        <dl class="resource-detail__grid">
          <dt>Tipo</dt><dd>${escapeHtml(typeValue)}</dd>
          <dt>Clase de daño</dt><dd>${escapeHtml(damageClass)}</dd>
          <dt>Poder</dt><dd>${escapeHtml(power)}</dd>
          <dt>Precisión</dt><dd>${escapeHtml(accuracy)}</dd>
          <dt>PP</dt><dd>${escapeHtml(pp)}</dd>
          <dt>Prioridad</dt><dd>${escapeHtml(priority)}</dd>
        </dl>
        <h3>Efecto breve</h3>
        <p>${shortEffect}</p>
      </div>
    `;
  }

  function renderItemDetail(detail) {
    const category = detail.category?.name ? humanize(detail.category.name) : "No disponible";
    const cost = Number.isInteger(detail.cost) ? detail.cost : "No disponible";
    const flingPower = Number.isInteger(detail.fling_power) ? detail.fling_power : "No disponible";
    const flingEffect = detail.fling_effect?.name ? humanize(detail.fling_effect.name) : "No disponible";
    const shortEffect = effectText(detail.effect_entries, "Sin efecto registrado.");
    modalContent.innerHTML = `
      <div class="resource-detail">
        <div class="resource-detail__heading">
          <h2 id="resource-detail-title">${escapeHtml(humanize(detail.name))}</h2>
          <span class="resource-detail__id">#${String(detail.id).padStart(4, "0")}</span>
        </div>
        <dl class="resource-detail__grid">
          <dt>Categoría</dt><dd>${escapeHtml(category)}</dd>
          <dt>Costo</dt><dd>${escapeHtml(cost)}</dd>
          <dt>Fling power</dt><dd>${escapeHtml(flingPower)}</dd>
          <dt>Fling effect</dt><dd>${escapeHtml(flingEffect)}</dd>
        </dl>
        <h3>Efecto breve</h3>
        <p>${shortEffect}</p>
      </div>
    `;
  }

  async function openDetail(id) {
    state.openTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalContent.innerHTML = '<p class="modal-loading">Cargando detalle...</p>';
    modal.hidden = false;
    modalOverlay.hidden = false;
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
      modalOverlay.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
    modalClose.focus();

    try {
      let detail = state.detailCache.get(id);
      if (!detail) {
        detail = await fetchJson(`${API_BASE}/${endpoint}/${id}`);
        state.detailCache.set(id, detail);
      }
      if (isMoves) renderMoveDetail(detail);
      else renderItemDetail(detail);
    } catch (e) {
      modalContent.innerHTML = `
        <p class="modal-error">
          No se pudo cargar el detalle del ${nounSingular}. Intenta de nuevo.
        </p>
      `;
      console.error(e);
    }
  }

  async function runSearch() {
    state.requestId += 1;
    const requestId = state.requestId;
    state.query = input.value.trim().toLowerCase();
    refreshView();
    if (!state.query || state.filteredEntries.length > 0) return;

    status.textContent = `Buscando ${nounSingular} exacto en API...`;
    try {
      const detail = await fetchJson(`${API_BASE}/${endpoint}/${encodeURIComponent(state.query)}`);
      if (requestId !== state.requestId) return;
      const fallbackEntry = { id: detail.id, name: detail.name };
      state.detailCache.set(detail.id, detail);
      const alreadyExists = state.entries.some((entry) => entry.id === detail.id);
      if (!alreadyExists) state.entries.push(fallbackEntry);
      state.filteredEntries = [fallbackEntry];
      renderList(state.filteredEntries);
      status.textContent = `Coincidencia exacta para ${nounSingular} #${detail.id}.`;
    } catch (e) {
      if (requestId !== state.requestId) return;
      if (e && e.status === 404) {
        status.textContent = `No existe un ${nounSingular} con "${state.query}".`;
      } else {
        status.textContent = `Error al buscar ${nounSingular}.`;
      }
      list.innerHTML = `
        <li class="resource-empty" role="status">
          No fue posible obtener resultados en este momento.
        </li>
      `;
    }
  }

  input.addEventListener("input", runSearch);
  loadMoreButton.addEventListener("click", loadMoreEntries);
  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-resource-id]");
    if (!button) return;
    const id = Number(button.getAttribute("data-resource-id"));
    if (!Number.isInteger(id) || id <= 0) return;
    openDetail(id);
  });
  modalClose.addEventListener("click", closeDetail);
  modalOverlay.addEventListener("click", closeDetail);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeDetail();
  });

  loadMoreEntries();
}

function initEquipoPage() {
  const teamList = $("team-list");
  const teamCount = $("team-count");
  const teamEmpty = $("team-empty");
  const form = $("team-search-form");
  const input = $("team-search-input");
  const status = $("team-search-status");
  const result = $("team-search-result");
  const errorBanner = $("error-banner");
  if (!teamList || !teamCount || !teamEmpty || !form || !input || !status || !result || !errorBanner) return;

  const state = {
    team: loadTeamFromStorage(),
    detailCache: new Map(),
    resultPokemon: null,
  };

  function showError(message) {
    errorBanner.textContent = message;
    errorBanner.hidden = false;
  }

  function hideError() {
    errorBanner.hidden = true;
    errorBanner.textContent = "";
  }

  function persist() {
    persistTeam(state.team);
  }

  function isInTeam(id) {
    return state.team.some((entry) => entry.id === id);
  }

  async function ensureDetails(ids) {
    const pending = ids.filter((id) => !state.detailCache.has(id));
    await Promise.all(
      pending.map(async (id) => {
        try {
          const data = await fetchJson(`${API_BASE}/pokemon/${id}`);
          state.detailCache.set(id, data);
        } catch (e) {
          console.error(e);
        }
      })
    );
  }

  function getOriginalName(id) {
    return state.detailCache.get(id)?.name || `pokemon-${id}`;
  }

  function renderTeam() {
    teamCount.textContent = String(state.team.length);
    teamList.innerHTML = "";

    if (state.team.length === 0) {
      teamEmpty.hidden = false;
      return;
    }

    teamEmpty.hidden = true;
    const frag = document.createDocumentFragment();

    for (const entry of state.team) {
      const original = humanize(getOriginalName(entry.id));
      const displayNickname = entry.nickname ? humanize(entry.nickname) : "Sin apodo";
      const item = document.createElement("li");
      item.className = "team-item";
      item.innerHTML = `
        <img src="${OFFICIAL_ARTWORK(entry.id)}" alt="Sprite de ${escapeHtml(original)}" width="48" height="48" loading="lazy" decoding="async" />
        <div class="team-item__meta">
          <strong>${escapeHtml(displayNickname)}</strong>
          <span class="team-item__original">${escapeHtml(original)} · #${String(entry.id).padStart(4, "0")}</span>
        </div>
        <div class="team-item__nickname">
          <label class="visually-hidden" for="nick-${entry.id}">Apodo de ${escapeHtml(original)}</label>
          <input
            id="nick-${entry.id}"
            class="team-nickname-input"
            type="text"
            maxlength="20"
            placeholder="Sin apodo"
            value="${escapeHtml(entry.nickname || "")}"
            data-nickname-input
            data-id="${entry.id}"
          />
          <button type="button" class="team-save-btn" data-team-action="save-nickname" data-id="${entry.id}">
            Guardar apodo
          </button>
        </div>
        <div class="team-item__actions">
          <button type="button" class="team-remove-btn" data-team-action="remove" data-id="${entry.id}">
            Quitar del equipo
          </button>
        </div>
      `;
      frag.appendChild(item);
    }
    teamList.appendChild(frag);
  }

  function renderSearchResult() {
    if (!state.resultPokemon) {
      result.innerHTML = "";
      return;
    }

    const pokemon = state.resultPokemon;
    const inTeam = isInTeam(pokemon.id);
    result.innerHTML = `
      <article class="team-search-card">
        <img src="${OFFICIAL_ARTWORK(pokemon.id)}" alt="Arte oficial de ${escapeHtml(pokemon.name)}" width="96" height="96" />
        <div class="team-search-card__body">
          <h3>${escapeHtml(humanize(pokemon.name))}</h3>
          <p>#${String(pokemon.id).padStart(4, "0")}</p>
          <button type="button" class="btn-team" data-team-action="${inTeam ? "remove" : "add"}" data-id="${pokemon.id}">
            ${inTeam ? "Quitar del equipo" : "Agregar al equipo"}
          </button>
        </div>
      </article>
    `;
  }

  function addToTeam(id) {
    if (isInTeam(id)) return;
    if (state.team.length >= TEAM_LIMIT) {
      showError(`Tu equipo ya tiene ${TEAM_LIMIT} Pokémon.`);
      return;
    }
    state.team.push({ id, nickname: "" });
    persist();
    hideError();
    renderTeam();
    renderSearchResult();
  }

  function removeFromTeam(id) {
    const next = state.team.filter((entry) => entry.id !== id);
    if (next.length === state.team.length) return;
    state.team = next;
    persist();
    hideError();
    renderTeam();
    renderSearchResult();
  }

  function saveNickname(id, nicknameRaw) {
    const entry = state.team.find((item) => item.id === id);
    if (!entry) return;
    entry.nickname = String(nicknameRaw || "").trim();
    persist();
    renderTeam();
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();
    const query = input.value.trim().toLowerCase();
    if (!query) {
      status.textContent = "Escribe un nombre o ID válido.";
      state.resultPokemon = null;
      renderSearchResult();
      return;
    }

    status.textContent = "Buscando Pokémon...";
    try {
      const data = await fetchJson(`${API_BASE}/pokemon/${encodeURIComponent(query)}`);
      state.detailCache.set(data.id, data);
      state.resultPokemon = { id: data.id, name: data.name };
      renderSearchResult();
      status.textContent = `Pokémon encontrado: ${humanize(data.name)} (#${data.id}).`;
    } catch (e2) {
      state.resultPokemon = null;
      renderSearchResult();
      if (e2 && e2.status === 404) {
        status.textContent = `No existe un Pokémon con "${query}".`;
      } else {
        status.textContent = "Error de red al buscar Pokémon.";
      }
    }
  });

  result.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-team-action][data-id]");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    if (!Number.isInteger(id) || id <= 0) return;
    if (btn.getAttribute("data-team-action") === "remove") removeFromTeam(id);
    else addToTeam(id);
  });

  teamList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-team-action][data-id]");
    if (!btn) return;
    const id = Number(btn.getAttribute("data-id"));
    if (!Number.isInteger(id) || id <= 0) return;
    const action = btn.getAttribute("data-team-action");
    if (action === "remove") {
      removeFromTeam(id);
      return;
    }
    if (action === "save-nickname") {
      const inputEl = teamList.querySelector(`[data-nickname-input][data-id="${id}"]`);
      saveNickname(id, inputEl?.value || "");
    }
  });

  teamList.addEventListener("change", (e) => {
    const target = e.target.closest("[data-nickname-input][data-id]");
    if (!target) return;
    const id = Number(target.getAttribute("data-id"));
    if (!Number.isInteger(id) || id <= 0) return;
    saveNickname(id, target.value || "");
  });

  ensureDetails(state.team.map((entry) => entry.id)).then(renderTeam);
  renderTeam();
}

function init() {
  initTheme();
  const page = document.body.dataset.page;
  if (page === "inicio") initInicioPage();
  if (page === "movimientos") initResourcePage("moves");
  if (page === "items") initResourcePage("items");
  if (page === "equipo") initEquipoPage();
}

init();
