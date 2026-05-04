/**
 * ---------------------------------------------------------------------------
 * Constantes globales de la Pokédex (URLs, claves de almacenamiento, límites)
 * ---------------------------------------------------------------------------
 * Centralizamos valores que en vanilla vivían al inicio de `app.js`.
 * Así evitamos “números mágicos” repartidos y facilitamos pruebas y cambios.
 */

/** Base de PokeAPI (sin barra final). */
export const API_BASE = "https://pokeapi.co/api/v2";

/** Clave en localStorage para el tema claro/oscuro. */
export const THEME_KEY = "pokedex-theme";

/** Clave en localStorage para el equipo del usuario. */
export const TEAM_KEY = "pokedex-team";

/** Máximo de Pokémon en el equipo (misma regla que vanilla). */
export const TEAM_LIMIT = 6;

/** Tamaño de página al cargar listas de movimientos/ítems. */
export const RESOURCE_PAGE_SIZE = 60;

/** Lotes de lista principal de Pokémon en Inicio. */
export const POKEMON_LIST_LIMIT = 20;

/** URL de arte oficial (misma que en vanilla). */
export const officialArtworkUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
