# Pokédex Nacional — Documento comparativo (Vanilla vs React)

Este documento resume **similitudes**, **diferencias de arquitectura** y **qué cambió** al migrar la carpeta `pokedex-app` (HTML/CSS/JS vanilla) a `pokedex-app-React` (Vite + React + TypeScript).

---

## 1. Similitudes (paridad funcional y visual)

- **Misma API**: [PokeAPI](https://pokeapi.co/) con los mismos endpoints y tamaños de página (`pokemon` lote 20; `move`/`item` lote 60).
- **Mismas vistas**: Inicio, Movimientos, Ítems y Mi equipo.
- **Misma UX clave**:
  - Lista infinita en Inicio con `IntersectionObserver` y “sentinel”.
  - Búsqueda local + **fallback** por nombre/ID cuando no hay coincidencias locales.
  - Modal de detalle (Pokémon / movimiento / ítem) con overlay, tecla Escape y animación.
  - Tema claro/oscuro con `data-theme` en `<html>` y persistencia `localStorage` (`pokedex-theme`).
  - Equipo en `localStorage` (`pokedex-team`) con límite de 6 y apodos.
- **Mismo CSS**: se copió `styles.css` de la versión vanilla a `src/styles/globals.css` para conservar el diseño (glassmorphism, grid, modales, skeletons, etc.).

---

## 2. Cómo funcionaba en Vanilla

1. **Varias páginas HTML** enlazadas entre sí (`index.html`, `movimientos.html`, …) con `data-page` en `<body>`.
2. Un solo **`app.js`** con `init()` que lee `data-page` y ejecuta `initInicioPage`, `initResourcePage` o `initEquipoPage`.
3. **Manipulación directa del DOM**: `document.getElementById`, `innerHTML`, `appendChild`, listeners globales.
4. **Estado en objetos locales** dentro de cada `init*` (por ejemplo `const state = { ... }` en Inicio).
5. **Sin bundler obligatorio**: basta abrir los HTML o servir archivos estáticos.

---

## 3. Cómo funciona en React

1. **SPA con rutas**: `react-router-dom` (`/`, `/movimientos`, `/items`, `/equipo`) reemplaza los distintos HTML.
2. **Componentes y páginas** (`src/pages/*`, `src/components/*`) encapsulan UI y comportamiento.
3. **Estado con hooks** (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`) en lugar de mutar el DOM manualmente.
4. **Contexto de equipo** (`TeamProvider` + `useTeam`) centraliza el equipo para Inicio (modal) y Equipo.
5. **Layout con “slot” de header** (`setHeaderExtra` vía `Outlet` context) para colocar el buscador de Inicio en la cabecera como en vanilla.
6. **Build con Vite**: empaquetado, TypeScript y optimización para producción en `dist/`.

---

## 4. Qué cambió (y por qué)

| Aspecto | Vanilla | React |
|--------|---------|-------|
| Navegación | Recarga de HTML distintos | Navegación cliente sin recargar |
| Estado | Variables en `init*` | `useState` / `useRef` / contexto |
| DOM | `innerHTML`, `createElement` | JSX declarativo |
| Tipado | JS sin tipos | TypeScript + interfaces mínimas de API |
| Reutilización | Funciones compartidas en un archivo | Componentes, hooks y servicios |
| ESLint | No incluido en el proyecto original | Proyecto Vite con reglas; se relajaron reglas experimentales muy estrictas (`set-state-in-effect`, `refs`, `only-export-components`) para permitir patrones habituales de fetch y contexto |

---

## 5. Comandos útiles

```bash
cd pokedex-app-React
npm install
npm run dev
npm run build
npm run lint
```

---

## 6. Conclusión pedagógica

La versión React **reproduce el comportamiento** de la vanilla, pero separa responsabilidades (servicios, páginas, layout, contexto) y aprovecha el **renderizado declarativo** y el **tipado** para facilitar el mantenimiento y la evolución del proyecto de clase.
