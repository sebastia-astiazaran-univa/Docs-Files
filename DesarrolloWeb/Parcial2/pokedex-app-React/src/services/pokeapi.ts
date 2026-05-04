/**
 * ---------------------------------------------------------------------------
 * Servicio PokeAPI: fetch, normalización y extracción de IDs desde URLs
 * ---------------------------------------------------------------------------
 * Sustituye las funciones `fetchJson`, `extractIdFromUrl`, `normalizePokemon`
 * del `app.js` vanilla, pero tipado y reutilizable desde hooks/páginas.
 */

import { API_BASE, officialArtworkUrl } from "../constants";
import type {
  ItemDetail,
  MoveDetail,
  NamedApiResource,
  NormalizedPokemon,
  PaginatedListResponse,
  PokemonDetail,
} from "../types/pokeapi";

/** Error HTTP con código para distinguir 404 de otros fallos. */
export class HttpError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

/**
 * GET JSON con manejo de `res.ok` alineado al vanilla.
 */
export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new HttpError(`HTTP ${res.status}`, res.status);
  }
  return res.json() as Promise<T>;
}

/**
 * Extrae el ID numérico final de una URL de recurso de PokeAPI.
 */
export function extractIdFromUrl(listUrl: string): number {
  const parts = listUrl.split("/").filter(Boolean);
  return parseInt(parts[parts.length - 1], 10);
}

/**
 * Convierte respuesta cruda de Pokémon a modelo de UI ordenado.
 */
export function normalizePokemon(data: PokemonDetail): NormalizedPokemon {
  const types = (data.types || [])
    .slice()
    .sort((a, b) => a.slot - b.slot)
    .map((t) => t.type.name);
  return {
    id: data.id,
    name: data.name,
    types,
    artworkUrl: officialArtworkUrl(data.id),
  };
}

export async function fetchPokemonListPage(
  offset: number,
  limit: number
): Promise<PaginatedListResponse> {
  return fetchJson<PaginatedListResponse>(
    `${API_BASE}/pokemon?offset=${offset}&limit=${limit}`
  );
}

export async function fetchPokemonDetail(
  idOrName: string | number
): Promise<PokemonDetail> {
  return fetchJson<PokemonDetail>(
    `${API_BASE}/pokemon/${encodeURIComponent(String(idOrName))}`
  );
}

export async function fetchResourceListPage(
  endpoint: "move" | "item",
  offset: number,
  limit: number
): Promise<PaginatedListResponse> {
  return fetchJson<PaginatedListResponse>(
    `${API_BASE}/${endpoint}?offset=${offset}&limit=${limit}`
  );
}

export async function fetchMoveDetail(id: number): Promise<MoveDetail> {
  return fetchJson<MoveDetail>(`${API_BASE}/move/${id}`);
}

export async function fetchItemDetail(id: number): Promise<ItemDetail> {
  return fetchJson<ItemDetail>(`${API_BASE}/item/${id}`);
}

export async function fetchMoveByName(name: string): Promise<MoveDetail> {
  return fetchJson<MoveDetail>(
    `${API_BASE}/move/${encodeURIComponent(name.toLowerCase())}`
  );
}

export async function fetchItemByName(name: string): Promise<ItemDetail> {
  return fetchJson<ItemDetail>(
    `${API_BASE}/item/${encodeURIComponent(name.toLowerCase())}`
  );
}

export function toResourceEntry(raw: NamedApiResource): {
  id: number;
  name: string;
} {
  return {
    id: extractIdFromUrl(raw.url),
    name: raw.name,
  };
}
