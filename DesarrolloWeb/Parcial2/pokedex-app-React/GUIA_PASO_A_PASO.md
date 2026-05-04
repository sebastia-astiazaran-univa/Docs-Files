---
marp: true
theme: default
size: 16:9
paginate: true
title: Guía paso a paso — Pokédex React (pokedex-app-React)
description: Desde instalación hasta implementación, alineada con este repo
header: "Guía paso a paso — Pokédex React"
footer: "Diseño Web · Vite · Marp"
style: |
  section {
    justify-content: flex-start;
    padding-top: 2rem;
    padding-bottom: 2.4rem;
  }
  h1 { font-size: 1.45rem; margin: 0 0 0.3em 0; line-height: 1.15; }
  h2 { font-size: 1.05rem; margin: 0.15em 0 0.4em 0; color: #2563eb; }
  h3 { font-size: 0.92rem; margin: 0.45em 0 0.2em 0; }
  p, li { font-size: 0.78rem; line-height: 1.32; }
  blockquote { font-size: 0.76rem; margin: 0.4em 0; padding: 0.35em 0.65em; }
  pre {
    font-size: 0.48rem;
    line-height: 1.22;
    margin: 0.35em 0;
    padding: 0.55em 0.65em;
    overflow: visible;
  }
  code { font-size: 0.88em; background: #f1f5f9; padding: 0.06em 0.22em; border-radius: 3px; }
  ul { margin: 0.2em 0; }
---

<!-- _class: lead -->

# Guía paso a paso

## Pokédex en React (`pokedex-app-React`)

Reproduce **en orden** cómo se construyó el proyecto. Útil para entrega o para recrearlo desde cero.

> Requisitos: **Node.js LTS** y **npm**.

---

## Parte A — Instalación (1/2)

### A1. Proyecto Vite (React + TS)

```bash
cd DesarrolloWeb/Parcial2
npm create vite@latest pokedex-app-React -- --template react-ts
cd pokedex-app-React
npm install
```

### A2. React Router

```bash
npm install react-router-dom
```

---

## Parte A — Instalación (2/2)

### A3. Estilos desde vanilla

```bash
mkdir -p src/styles
cp ../pokedex-app/styles.css src/styles/globals.css
```

### A4. Limpiar plantilla

- Quitar `src/App.css` y `src/index.css` si no se usan.
- En `src/main.tsx`, importar solo `./styles/globals.css`.

### A5. `index.html`

- `lang="es"`, título y meta description de la Pokédex.

---

## Parte B — Estructura de carpetas

```text
src/
  App.tsx, main.tsx, constants.ts
  layout/AppLayout.tsx
  context/TeamContext.tsx
  hooks/useTheme.ts
  services/pokeapi.ts
  types/pokeapi.ts
  utils/text.ts
  components/ui/ErrorBanner.tsx
  components/pokemon/…
  pages/InicioPage.tsx, ResourceCatalogPage.tsx, EquipoPage.tsx
  styles/globals.css
```

---

## Parte C — Implementación (1/3)

### C1–C2

1. `src/constants.ts` — API, `localStorage`, límites.
2. `src/utils/text.ts` — `humanize`, búsqueda numérica.
3. `src/types/pokeapi.ts` — tipos mínimos.
4. `src/services/pokeapi.ts` — `fetchJson`, `HttpError`, fetch.

### C3–C4

1. `src/context/TeamContext.tsx` — `TeamProvider` + `useTeam()`.
2. `src/hooks/useTheme.ts` — `data-theme` en `<html>`.

---

## Parte C — Implementación (2/3)

### C5. Layout + rutas

1. `AppLayout.tsx` — header, `NavLink`, tema, `<Outlet />`, `setHeaderExtra`.
2. `App.tsx` — `/`, `/movimientos`, `/items`, `/equipo`.
3. `main.tsx` — `BrowserRouter` → `TeamProvider` → `App`.

### C6. Componentes base

`ErrorBanner`, `PokemonCard`, `PokemonGridSkeleton`, `PokemonDetailModal`.

---

## Parte C — Implementación (3/3)

### C7. Inicio

Estado (IDs, detalles, búsqueda, fallback, modal), `IntersectionObserver`, `useOutletContext` para el buscador en header.

### C8–C9

`ResourceCatalogPage` (`mode: "moves" | "items"`), `EquipoPage`.

### C10. Calidad

`npm run build`, `npm run lint`; ajustar ESLint si hace falta (reglas experimentales vs `useEffect`).


## Parte D — Checklist de paridad

- [ ] Inicio: infinito + skeletons + búsqueda + fallback + modal.
- [ ] Modal: stats + 12 movimientos + ítems + equipo.
- [ ] Movimientos / Ítems: lista, cargar más, búsqueda, modal.
- [ ] Equipo: límite 6, apodos, persistencia.
- [ ] Tema y estilos alineados con vanilla.

---

## Parte F — Comandos del proyecto

```bash
npm run dev      # desarrollo
npm run build    # dist/
npm run preview  # servir dist/
```

Si falla la red: revisa consola; la app usa `fetch` a `https://pokeapi.co`.
