---
marp: true
theme: default
size: 16:9
paginate: true
title: Walkthrough del código — pokedex-app-React
description: Guía por archivos de la migración a React + TypeScript
header: "Walkthrough — pokedex-app-React"
footer: "Diseño Web · PokeAPI · Marp"
# Tablas y rutas largas: reducimos tamaño para que quepan en 16:9
style: |
  section {
    justify-content: flex-start;
    padding-top: 2.2rem;
    padding-bottom: 2.5rem;
  }
  h1 { font-size: 1.55rem; margin: 0 0 0.35em 0; line-height: 1.15; }
  h2 { font-size: 1.12rem; margin: 0.2em 0 0.45em 0; color: #2563eb; }
  h3 { font-size: 0.98rem; margin: 0.5em 0 0.25em 0; }
  p, li { font-size: 0.82rem; line-height: 1.35; }
  table { font-size: 0.58rem; width: 100%; border-collapse: collapse; margin: 0.35em 0; }
  th, td { border: 1px solid #cbd5e1; padding: 0.35em 0.45em; vertical-align: top; }
  th { background: #f1f5f9; text-align: left; }
  code { font-size: 0.92em; background: #f1f5f9; padding: 0.08em 0.25em; border-radius: 4px; }
  a { color: #1d4ed8; word-break: break-all; }
---

<!-- _class: lead -->

# Walkthrough del código

## `pokedex-app-React`

Guía de lectura **archivo por archivo** — implementación React y relación con la versión **vanilla**.

---

## 1. Punto de entrada y estilos

| Archivo | Rol |
|---------|-----|
| [`index.html`](index.html) | HTML mínimo: monta `#root` y carga `main.tsx`. |
| [`src/main.tsx`](src/main.tsx) | Monta React, `BrowserRouter`, `TeamProvider` e importa estilos globales. |
| [`src/styles/globals.css`](src/styles/globals.css) | CSS copiado de la Pokédex vanilla (tema, layout, modales, grid, etc.). |

---

## 2. Rutas y layout

| Archivo | Rol |
|---------|-----|
| [`src/App.tsx`](src/App.tsx) | Define rutas: `/`, `/movimientos`, `/items`, `/equipo`. |
| [`src/layout/AppLayout.tsx`](src/layout/AppLayout.tsx) | Header fijo, `NavLink`, tema y `<Outlet />`. Expone `setHeaderExtra` para el buscador de Inicio. |

**Idea:** en vanilla el buscador está en `index.html`; en React el estado vive en `InicioPage`, pero el input se monta en el header vía contexto del `Outlet`.

---

## 3. Estado global del equipo

| Archivo | Rol |
|---------|-----|
| [`src/context/TeamContext.tsx`](src/context/TeamContext.tsx) | `TeamProvider` + `useTeam()`: `localStorage` compatible con vanilla. |

**Consumidores:** `PokemonDetailModal` y `EquipoPage`.

---

## 4. Servicios y utilidades

| Archivo | Rol |
|---------|-----|
| [`src/constants.ts`](src/constants.ts) | URLs, claves `localStorage`, límites. |
| [`src/services/pokeapi.ts`](src/services/pokeapi.ts) | `fetchJson`, listas/detalles, `HttpError` (404). |
| [`src/types/pokeapi.ts`](src/types/pokeapi.ts) | Tipos mínimos de la API. |
| [`src/utils/text.ts`](src/utils/text.ts) | `humanize`, `parseExactNumericQuery`. |

---

## 5. Hooks transversales

| Archivo | Rol |
|---------|-----|
| [`src/hooks/useTheme.ts`](src/hooks/useTheme.ts) | Toggle de tema: `data-theme` en `<html>` + `localStorage`. |

---

## 6. Componentes reutilizables

| Archivo | Rol |
|---------|-----|
| [`src/components/ui/ErrorBanner.tsx`](src/components/ui/ErrorBanner.tsx) | Banner de error (`role="alert"`). |
| [`src/components/pokemon/PokemonCard.tsx`](src/components/pokemon/PokemonCard.tsx) | Tarjeta de Pokémon (lista / fallback). |
| [`src/components/pokemon/PokemonGridSkeleton.tsx`](src/components/pokemon/PokemonGridSkeleton.tsx) | Skeletons del grid. |
| [`src/components/pokemon/PokemonDetailModal.tsx`](src/components/pokemon/PokemonDetailModal.tsx) | Modal de detalle (stats, movimientos, ítems, equipo). |

---

## 7. Páginas — mapa ↔ vanilla

| Archivo | Equivalente vanilla |
|---------|---------------------|
| [`src/pages/InicioPage.tsx`](src/pages/InicioPage.tsx) | `initInicioPage()` |
| [`src/pages/ResourceCatalogPage.tsx`](src/pages/ResourceCatalogPage.tsx) | `initResourcePage("moves" \| "items")` |
| [`src/pages/EquipoPage.tsx`](src/pages/EquipoPage.tsx) | `initEquipoPage()` |

---

## 7. Páginas — flujos

**Inicio**

1. `loadNextBatch`: lista `pokemon?offset&limit` + detalles en paralelo.
2. `IntersectionObserver` en `#sentinel`; sin búsqueda activa carga más.
3. Búsqueda filtra IDs cargados; si no hay match → `pokemon/{query}`.
4. Si solo existe en API → **fallback** con una tarjeta.

**Movimientos / Ítems** — catálogo + “Cargar más”, búsqueda local + exacta remota, modal de detalle.

**Equipo** — búsqueda exacta, apodos, alta/baja; persistencia con `useTeam()`.

---

## 8. Calidad y build

| Archivo | Rol |
|---------|-----|
| [`eslint.config.js`](eslint.config.js) | ESLint; reglas experimentales relajadas para `useEffect` + contexto. |
| [`vite.config.ts`](vite.config.ts) | Vite + plugin React. |

---

## 9. Ruta de estudio (45–60 min)

1. `main.tsx` → `App.tsx` → `AppLayout.tsx`
2. `services/pokeapi.ts` + `constants.ts`
3. `pages/InicioPage.tsx`
4. `PokemonDetailModal.tsx` + `TeamContext.tsx`
5. `ResourceCatalogPage.tsx` y `EquipoPage.tsx`

Con esto cubres **UI + datos + estado compartido**.

