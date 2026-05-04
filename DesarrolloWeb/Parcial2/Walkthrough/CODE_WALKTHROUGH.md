# Walkthrough de código — Pokédex (implementación rápida)

Objetivo: ir de **cero a funcional** en pasos cortos. Copiá cada bloque en orden en `index.html`, `styles.css` y `app.js` (o seguí el orden dentro de un solo archivo si ya tenés esqueleto).

**Referencia completa ya hecha:** `../pokedex-app/` (`index.html`, `styles.css`, `app.js`). Si algo falla, compará con esos archivos.

**Probar:** `python3 -m http.server 8080` dentro de esta carpeta y abrí `http://localhost:8080` (evita problemas de `fetch` con `file://`).

---

## Fase A — HTML (5 min)

### A1. Documento mínimo + enlaces

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pokédex</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <script src="app.js" defer></script>
</body>
</html>
```

### A2. Controles + grid + sentinel + modal (ids fijos para el JS)

Pegá **antes** del `<script>`:

```html
<header class="site-header">
  <input type="search" id="search-input" placeholder="Buscar…" />
  <button type="button" id="theme-toggle" aria-label="Tema">🌓</button>
</header>
<div id="error-banner" role="alert" hidden></div>
<main id="main">
  <div id="pokemon-grid" role="list"></div>
  <div id="sentinel" aria-hidden="true"></div>
</main>
<div id="modal-overlay" hidden></div>
<div id="modal" role="dialog" aria-modal="true" hidden tabindex="-1">
  <button type="button" id="modal-close" aria-label="Cerrar">×</button>
  <div id="modal-content"></div>
</div>
```

> Más semántica y accesibilidad: copiá el `index.html` completo de `pokedex-app/`.

---

## Fase B — CSS (10 min, versión mínima)

### B1. Reset + variables + grid

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; }

#pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

#sentinel { height: 4px; }
.pokemon-card--hidden { display: none !important; }
```

### B2. Tarjeta y modal básicos

```css
.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
#modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.5);
  z-index: 10;
}
#modal {
  position: fixed; inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #fff;
  color: #111;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 90vw;
  max-height: 85vh;
  overflow: auto;
}
```

> Tema oscuro, glass, skeleton, tipos: copiá bloques de `pokedex-app/styles.css`.

---

## Fase C — JavaScript (20–30 min, núcleo)

### C1. Constantes + DOM + estado

```javascript
const API = "https://pokeapi.co/api/v2";
const ART = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const state = {
  offset: 0,
  limit: 20,
  loading: false,
  hasMore: true,
  cache: new Map(),
};

const $ = (id) => document.getElementById(id);
const grid = $("pokemon-grid");
const sentinel = $("sentinel");
```

### C2. Fetch + id desde URL de la lista

```javascript
async function fetchJson(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(r.status);
  return r.json();
}
function idFromListUrl(url) {
  const p = url.split("/").filter(Boolean);
  return parseInt(p[p.length - 1], 10);
}
```

### C3. Una tarjeta en el DOM

```javascript
function cardEl(p) {
  const el = document.createElement("article");
  el.className = "pokemon-card";
  el.dataset.name = p.name.toLowerCase();
  el.innerHTML = `
    <img src="${ART(p.id)}" alt="${p.name}" width="96" height="96" loading="lazy" />
    <h2>${p.name}</h2>
    <p>#${String(p.id).padStart(4,"0")}</p>
    <button type="button" class="btn-details" data-id="${p.id}">Ver más</button>
  `;
  return el;
}
```

### C4. Cargar un lote (lista + detalles en paralelo)

```javascript
async function loadBatch() {
  if (state.loading || !state.hasMore) return;
  state.loading = true;
  $("error-banner").hidden = true;
  try {
    const list = await fetchJson(`${API}/pokemon?offset=${state.offset}&limit=${state.limit}`);
    const rows = list.results || [];
    if (!rows.length) { state.hasMore = false; return; }

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
    $("error-banner").textContent = "Error de red. Probá de nuevo.";
    $("error-banner").hidden = false;
  } finally {
    state.loading = false;
  }
}
```

### C5. Scroll infinito

```javascript
new IntersectionObserver(
  (es) => es.some((x) => x.isIntersecting) && loadBatch(),
  { rootMargin: "120px" }
).observe(sentinel);
```

### C6. Búsqueda

```javascript
$("search-input").addEventListener("input", () => {
  const q = $("search-input").value.trim().toLowerCase();
  grid.querySelectorAll(".pokemon-card").forEach((c) => {
    const n = c.dataset.name || "";
    c.classList.toggle("pokemon-card--hidden", q && !n.includes(q));
  });
});
```

### C7. Modal mínimo (detalle desde caché o fetch)

```javascript
const modal = $("modal");
const overlay = $("modal-overlay");
const content = $("modal-content");

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
      const h = (d.height || 0) / 10, w = (d.weight || 0) / 10;
      const stats = (d.stats || []).map((s) =>
        `<div>${s.stat.name}: ${s.base_stat}</div>`
      ).join("");
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
```

### C8. Tema (opcional rápido)

```javascript
const KEY = "pokedex-theme";
const saved = localStorage.getItem(KEY);
if (saved) document.documentElement.dataset.theme = saved;
$("theme-toggle").onclick = () => {
  const cur = document.documentElement.dataset.theme;
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(KEY, next);
};
```

### C9. Arranque

```javascript
loadBatch();
```

---

## Checklist “ya está”

- [ ] Grid muestra Pokémon al cargar y al bajar.
- [ ] Búsqueda oculta tarjetas que no coinciden.
- [ ] “Ver más” abre modal con datos razonables.
- [ ] Sin doble carga simultánea (flag `loading`).
- [ ] Errores visibles si falla la API.

---

## Siguiente nivel (rápido → entrega)

1. Skeleton: antes de `fetch`, insertá placeholders; borralos al terminar el lote (ver `renderSkeletons` en `pokedex-app/app.js`).
2. Barras de stats y tipos con color: HTML del modal + CSS en `pokedex-app`.
3. `escapeHtml()` para nombres que vienen de la API al usar `innerHTML`.
4. README con cómo ejecutar con `http.server`.

---

*Última referencia de implementación completa: `../pokedex-app/`.*
