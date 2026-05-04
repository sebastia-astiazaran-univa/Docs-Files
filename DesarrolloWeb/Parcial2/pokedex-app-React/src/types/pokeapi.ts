/**
 * ---------------------------------------------------------------------------
 * Tipos mínimos de PokeAPI usados por esta app
 * ---------------------------------------------------------------------------
 * PokeAPI devuelve objetos grandes; aquí tipamos solo lo que leemos en UI.
 */

/** Entrada genérica de lista paginada (pokemon, move, item…). */
export interface NamedApiResource {
  name: string;
  url: string;
}

export interface PaginatedListResponse {
  next: string | null;
  results: NamedApiResource[];
}

export interface PokemonTypeSlot {
  slot: number;
  type: { name: string };
}

export interface PokemonStat {
  base_stat: number;
  stat: { name: string };
}

export interface PokemonMove {
  move: { name: string };
}

export interface PokemonHeldItem {
  item: { name: string };
}

/** Respuesta de detalle de Pokémon que usamos en tarjetas y modal. */
export interface PokemonDetail {
  id: number;
  name: string;
  types: PokemonTypeSlot[];
  stats: PokemonStat[];
  moves: PokemonMove[];
  held_items: PokemonHeldItem[];
}

/** Modelo normalizado para la UI (tarjetas / cabecera de modal). */
export interface NormalizedPokemon {
  id: number;
  name: string;
  types: string[];
  artworkUrl: string;
}

export interface EffectEntry {
  short_effect?: string;
  effect?: string;
  language?: { name: string };
}

export interface MoveDetail {
  id: number;
  name: string;
  type?: { name: string };
  damage_class?: { name: string };
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  priority: number | null;
  effect_entries: EffectEntry[];
}

export interface ItemDetail {
  id: number;
  name: string;
  category?: { name: string };
  cost: number | null;
  fling_power: number | null;
  fling_effect?: { name: string } | null;
  effect_entries: EffectEntry[];
}

/** Entrada del equipo en localStorage (id + apodo opcional). */
export interface TeamEntry {
  id: number;
  nickname: string;
}
