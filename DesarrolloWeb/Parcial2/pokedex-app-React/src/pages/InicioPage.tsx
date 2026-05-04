/**
 * ---------------------------------------------------------------------------
 * Página Inicio: lista infinita, búsqueda, modal y fallback API
 * ---------------------------------------------------------------------------
 * Equivalente a `initInicioPage()` en `app.js` vanilla. El buscador se
 * monta en el header vía `setHeaderExtra` del layout (misma UX que antes).
 */

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOutletContext } from "react-router-dom";
import { POKEMON_LIST_LIMIT } from "../constants";
import type { AppLayoutOutletContext } from "../layout/AppLayout";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { PokemonDetailModal } from "../components/pokemon/PokemonDetailModal";
import { PokemonGridSkeleton } from "../components/pokemon/PokemonGridSkeleton";
import { ErrorBanner } from "../components/ui/ErrorBanner";
import {
  HttpError,
  extractIdFromUrl,
  fetchPokemonDetail,
  fetchPokemonListPage,
  normalizePokemon,
} from "../services/pokeapi";
import type { NamedApiResource, PokemonDetail } from "../types/pokeapi";
import { humanize, parseExactNumericQuery } from "../utils/text";

export function InicioPage() {
  const { setHeaderExtra } = useOutletContext<AppLayoutOutletContext>();

  const [searchTerm, setSearchTerm] = useState("");
  const [orderedIds, setOrderedIds] = useState<number[]>([]);
  const [detailById, setDetailById] = useState<Record<number, PokemonDetail>>(
    {}
  );
  const offsetRef = useRef(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadingLockRef = useRef(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fallbackId, setFallbackId] = useState<number | null>(null);
  const [modalId, setModalId] = useState<number | null>(null);

  const searchRequestIdRef = useRef(0);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const orderedIdsRef = useRef(orderedIds);
  const detailByIdRef = useRef(detailById);

  orderedIdsRef.current = orderedIds;
  detailByIdRef.current = detailById;

  const q = searchTerm.trim().toLowerCase();
  const numericId = useMemo(() => parseExactNumericQuery(q), [q]);

  const visibleIds = useMemo(() => {
    if (!q) return orderedIds;
    return orderedIds.filter((id) => {
      const name = detailById[id]?.name?.toLowerCase() ?? "";
      if (numericId !== null) return id === numericId;
      return name.includes(q);
    });
  }, [q, orderedIds, detailById, numericId]);

  const hideError = useCallback(() => setErrorMessage(null), []);

  /** Registra el buscador en el header (slot del layout). */
  useLayoutEffect(() => {
    setHeaderExtra(
      <label className="search-field">
        <span className="visually-hidden">
          Buscar Pokémon por nombre o ID
        </span>
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Buscar por nombre o ID…"
          autoComplete="off"
          spellCheck={false}
          aria-controls="pokemon-grid"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
    );
    return () => setHeaderExtra(null);
  }, [searchTerm, setHeaderExtra]);

  /** Limpia fallback cuando no hay búsqueda. */
  useEffect(() => {
    if (!q) setFallbackId(null);
  }, [q]);

  /**
   * Búsqueda remota cuando no hay coincidencias locales.
   * Depende solo de `searchTerm` para no re-disparar al cargar más por scroll.
   */
  useEffect(() => {
    hideError();
    setFallbackId(null);

    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    const numId = parseExactNumericQuery(query);
    const visible = orderedIdsRef.current.filter((id) => {
      const name = detailByIdRef.current[id]?.name?.toLowerCase() ?? "";
      if (numId !== null) return id === numId;
      return name.includes(query);
    });
    if (visible.length > 0) return;

    searchRequestIdRef.current += 1;
    const requestId = searchRequestIdRef.current;
    let cancelled = false;

    void (async () => {
      try {
        const data = await fetchPokemonDetail(query);
        if (cancelled || requestId !== searchRequestIdRef.current) return;
        setDetailById((prev) => ({ ...prev, [data.id]: data }));
        const existsInGrid = orderedIdsRef.current.includes(data.id);
        setFallbackId(existsInGrid ? null : data.id);
        hideError();
      } catch (e) {
        if (cancelled || requestId !== searchRequestIdRef.current) return;
        setFallbackId(null);
        if (e instanceof HttpError && e.status === 404) {
          setErrorMessage(
            `No se encontró ningún Pokémon con "${searchTerm.trim()}".`
          );
        } else {
          setErrorMessage(
            "Error de red al buscar en la API. Intenta de nuevo."
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [searchTerm, hideError]);

  const loadNextBatch = useCallback(async () => {
    if (loadingLockRef.current || !hasMore) return;
    const query = searchTerm.trim().toLowerCase();
    if (query) return;

    loadingLockRef.current = true;
    setIsLoading(true);
    hideError();
    const fetchOffset = offsetRef.current;
    try {
      const listData = await fetchPokemonListPage(
        fetchOffset,
        POKEMON_LIST_LIMIT
      );
      const results: NamedApiResource[] = listData.results || [];
      if (results.length === 0) {
        setHasMore(false);
        return;
      }
      const ids = results.map((r) => extractIdFromUrl(r.url));
      const settled = await Promise.all(
        ids.map(async (id) => {
          try {
            const detail = await fetchPokemonDetail(id);
            return { id, detail } as const;
          } catch {
            return null;
          }
        })
      );
      const ok = settled.filter(Boolean) as {
        id: number;
        detail: PokemonDetail;
      }[];
      setDetailById((prev) => {
        const next = { ...prev };
        for (const row of ok) next[row.id] = row.detail;
        return next;
      });
      setOrderedIds((prev) => {
        const seen = new Set(prev);
        const appended: number[] = [];
        for (const row of ok) {
          if (!seen.has(row.id)) {
            seen.add(row.id);
            appended.push(row.id);
          }
        }
        return [...prev, ...appended];
      });
      offsetRef.current = fetchOffset + POKEMON_LIST_LIMIT;
      if (results.length < POKEMON_LIST_LIMIT) setHasMore(false);
    } catch (e) {
      setErrorMessage(
        "No se pudieron cargar más Pokémon. Verifica tu conexión."
      );
      console.error(e);
    } finally {
      loadingLockRef.current = false;
      setIsLoading(false);
    }
  }, [hasMore, hideError, searchTerm]);

  /** Scroll infinito con IntersectionObserver (misma idea que vanilla). */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !searchTerm.trim()) void loadNextBatch();
        }
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadNextBatch, searchTerm]);

  /** Carga inicial del primer lote. */
  useEffect(() => {
    void loadNextBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intencional: solo arranque
  }, []);

  const showLocalEmptyHint =
    Boolean(q) && orderedIds.length > 0 && visibleIds.length === 0;

  const gridHidden = Boolean(fallbackId);
  const sentinelHidden = Boolean(fallbackId);

  const fallbackPokemon =
    fallbackId !== null ? normalizePokemon(detailById[fallbackId]) : null;

  return (
    <>
      <ErrorBanner message={errorMessage} />

      <main id="main" className="main">
        <p className="intro">
          Explora la Pokédex. Los datos provienen de{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeAPI
          </a>
          .
        </p>

        {fallbackPokemon && (
          <section aria-live="polite">
            <p className="empty-state">
              Resultado exacto para &quot;{searchTerm.trim()}&quot;:{" "}
              {humanize(fallbackPokemon.name)} (#{fallbackPokemon.id}).
            </p>
            <div
              className="pokemon-grid"
              role="list"
              aria-label="Resultado de búsqueda"
            >
              <PokemonCard
                pokemon={fallbackPokemon}
                onOpenDetails={setModalId}
              />
            </div>
          </section>
        )}

        <div className="grid-container">
          <div
            id="pokemon-grid"
            className="pokemon-grid"
            role="list"
            aria-live="polite"
            aria-label="Lista de Pokémon"
            hidden={gridHidden}
          >
            {visibleIds.map((id) => {
              const d = detailById[id];
              if (!d) return null;
              return (
                <PokemonCard
                  key={id}
                  pokemon={normalizePokemon(d)}
                  onOpenDetails={setModalId}
                />
              );
            })}
            {isLoading && !q && (
              <PokemonGridSkeleton count={POKEMON_LIST_LIMIT} />
            )}
            {showLocalEmptyHint && (
              <p className="empty-state" role="status">
                Sin coincidencias locales. Buscando en la API…
              </p>
            )}
          </div>
          <div
            id="sentinel"
            ref={sentinelRef}
            className="sentinel"
            aria-hidden="true"
            data-testid="infinite-scroll-sentinel"
            hidden={sentinelHidden}
          />
        </div>
      </main>

      <PokemonDetailModal
        open={modalId !== null}
        pokemonId={modalId}
        onClose={() => setModalId(null)}
        onTeamError={setErrorMessage}
      />
    </>
  );
}
