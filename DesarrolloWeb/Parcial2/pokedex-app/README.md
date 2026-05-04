# Pokédex Nacional (2.º parcial)

SPA en **HTML, CSS y JavaScript vanilla** que consume [PokeAPI](https://pokeapi.co/) sin autenticación.

## Requisitos cumplidos

- Cuadrícula responsiva con **nombre**, **ID nacional**, **imagen oficial**, **tipos con color** y botón **Ver más**.
- **Búsqueda** por nombre en tiempo real sobre los Pokémon ya cargados.
- **Modal de detalle** con imagen grande, **estadísticas** (barras), **habilidades**, **altura** y **peso**.
- **Scroll infinito** mediante `IntersectionObserver` y lote de 20 (`offset` / `limit`).
- **Skeleton loaders** mientras llega cada lote.
- **Modo claro / oscuro**: respeta `prefers-color-scheme`, con **toggle manual** y preferencia en `localStorage` (`pokedex-theme`).
- **CSS moderno**: Grid + Flexbox, **glassmorphism** (`backdrop-filter`), **variables CSS** para temas, **animaciones** / transiciones, **container queries** en las tarjetas, imágenes con `loading="lazy"`.

## Cómo ejecutarla

No hace falta build ni servidor obligatorio:

1. Abre `index.html` en el navegador (doble clic o “Open with Live Server”).
2. Si tu navegador restringe `fetch` en `file://`, usa un servidor estático local, por ejemplo:
   ```bash
   cd pokedex-app
   python3 -m http.server 8080
   ```
   Luego entra a `http://localhost:8080`.

## Estructura

| Archivo       | Rol                                      |
| ------------- | ---------------------------------------- |
| `index.html`  | Estructura semántica, modal, accesibilidad básica |
| `styles.css`  | Temas, grid, tarjetas, skeleton, modal   |
| `app.js`      | Estado, `fetch`, scroll infinito, modal  |

## API e imágenes

- Lista: `GET https://pokeapi.co/api/v2/pokemon?offset=&limit=`
- Detalle: `GET https://pokeapi.co/api/v2/pokemon/{id o nombre}/`
- Arte oficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`

## Notas

- Los errores de red se muestran en un banner; el detalle fallido muestra mensaje dentro del modal.
- La búsqueda filtra solo entre Pokémon **ya cargados**; al hacer scroll se cargan más y pueden aparecer nuevas coincidencias.

## Entrega sugerida (GitHub)

Incluye esta carpeta `pokedex-app` en el repositorio del curso y enlaza el README o una demo si publicas en GitHub Pages.
