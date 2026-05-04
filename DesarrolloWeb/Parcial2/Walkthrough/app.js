/**
 * Pokédex mínima — Walkthrough
 * Flujo: carga lotes desde PokeAPI → pinta tarjetas → scroll infinito → búsqueda → modal.
 */

// -----------------------------------------------------------------------------
// CONFIGURACIÓN: URL base de la API y plantilla de imagen oficial por ID
// -----------------------------------------------------------------------------
const API = "https://pokeapi.co/api/v2";
const ART = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

// -----------------------------------------------------------------------------
// ESTADO EN MEMORIA (no hace falta framework: un objeto basta)
// offset/limit: paginación; loading: evita dos peticiones a la vez;
// hasMore: si la API ya no devuelve más ítems; cache: detalle por id.
// -----------------------------------------------------------------------------
const state = {
    offset: 0,
    limit: 20,
    loading: false,
    hasMore: true,
    cache: new Map(),
};

// -----------------------------------------------------------------------------
// REFERENCIAS AL DOM: atajo $() y nodos que usamos mucho
// -----------------------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const grid = $("pokemon-grid");
const sentinel = $("sentinel");

/**
 * fetchJson — Hace GET a una URL y devuelve el JSON parseado.
 * Si el servidor responde con error HTTP, lanza excepción (para el catch de loadBatch).
 */
async function fetchJson(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    return r.json();
}

/**
 * idFromListUrl — La lista de /pokemon devuelve URLs como .../pokemon/25/;
 * extrae el número final para usarlo en /pokemon/{id}.
 */
function idFromListUrl(url) {
    const p = url.split("/").filter(Boolean);
    return parseInt(p[p.length - 1], 10);
}

/**
 * cardEl — Crea un <article> con imagen, nombre, número y botón “Ver más”.
 * dataset.name sirve para filtrar en la búsqueda sin volver a parsear el DOM.
 */
function cardEl(p) {
    const el = document.createElement("article");
    el.className = "pokemon-card";
    el.dataset.name = p.name.toLowerCase();
    el.innerHTML = `
        <img src="${ART(p.id)}" alt="${p.name}" width="96" height="96" loading="lazy" />
        <h2>${p.name}</h2>
        <p>#${String(p.id).padStart(4, "0")}</p>
        <button type="button" class="btn-details" data-id="${p.id}">Ver más</button>
    `;
    return el;
}

/**
 * loadBatch — Pide un lote de la lista, luego el detalle de cada Pokémon en paralelo,
 * guarda en cache, añade tarjetas al grid y avanza offset. Maneja errores en el banner.
 */
async function loadBatch() {
    if (state.loading || !state.hasMore) return;
    state.loading = true;
    $("error-banner").hidden = true;
    try {
        const list = await fetchJson(
            `${API}/pokemon?offset=${state.offset}&limit=${state.limit}`
        );
        const rows = list.results || [];
        if (!rows.length) {
            state.hasMore = false;
            return;
        }

        const ids = rows.map((r) => idFromListUrl(r.url));
        await Promise.all(
            ids.map((id) =>
                fetchJson(`${API}/pokemon/${id}`).then((d) => state.cache.set(id, d))
            )
        );

        ids.forEach((id) => grid.appendChild(cardEl(state.cache.get(id))));
        state.offset += state.limit;
        if (rows.length < state.limit) state.hasMore = false;
    } catch (e) {
        $("error-banner").textContent = "Error de red. Prueba de nuevo";
        $("error-banner").hidden = false;
    } finally {
        state.loading = false;
    }
}

// -----------------------------------------------------------------------------
// SCROLL INFINITO: cuando #sentinel entra en vista (o cerca), pide otro lote
// -----------------------------------------------------------------------------
new IntersectionObserver(
    (es) => es.some((x) => x.isIntersecting) && loadBatch(),
    { rootMargin: "120px" }
).observe(sentinel);

// -----------------------------------------------------------------------------
// BÚSQUEDA EN VIVO: oculta tarjetas cuyo data-name no incluye el texto escrito
// -----------------------------------------------------------------------------
$("search-input").addEventListener("input", () => {
    const q = $("search-input").value.trim().toLowerCase();
    grid.querySelectorAll(".pokemon-card").forEach((c) => {
        const n = c.dataset.name || "";
        c.classList.toggle("pokemon-card--hidden", q && !n.includes(q));
    });
});

// -----------------------------------------------------------------------------
// MODAL: referencias y listeners (delegación en el grid para “Ver más”)
// -----------------------------------------------------------------------------
const modal = $("modal");
const overlay = $("modal-overlay");
const content = $("modal-content");

/**
 * openModal — Muestra overlay + modal, reusa cache o fetch, pinta HTML del detalle.
 * Altura/peso de la API vienen en decimetros y hectogramos → se dividen entre 10.
 */
function openModal(id) {
    modal.hidden = overlay.hidden = false;
    content.innerHTML = "Cargando…";
    const run = async () => {
        try {
            let d = state.cache.get(id);
            if (!d) {
                d = await fetchJson(`${API}/pokemon/${id}`);
                state.cache.set(id, d);
            }
            const h = (d.height || 0) / 10;
            const w = (d.weight || 0) / 10;
            const stats = (d.stats || [])
                .map((s) => `<div>${s.stat.name}: ${s.base_stat}</div>`)
                .join("");
            const abs = (d.abilities || []).map((a) => a.ability.name).join(", ");
            content.innerHTML = `
        <h2>${d.name}</h2>
        <img src="${ART(d.id)}" alt="" width="180" />
        <p>Altura ${h} m · Peso ${w} kg</p>
        <p>Habilidades: ${abs}</p>
        <div>${stats}</div>
      `;
        } catch {
            content.textContent = "No se pudo cargar.";
        }
    };
    run();
}

/** closeModal — Oculta overlay y ventana (hidden es nativo del HTML). */
function closeModal() {
    modal.hidden = overlay.hidden = true;
}

$("modal-close").onclick = closeModal;
overlay.onclick = closeModal;
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

grid.addEventListener("click", (e) => {
    const b = e.target.closest(".btn-details");
    if (b) openModal(parseInt(b.dataset.id, 10));
});

// -----------------------------------------------------------------------------
// ARRANQUE: primera carga de Pokémon en cuanto el script está listo
// -----------------------------------------------------------------------------
loadBatch();
