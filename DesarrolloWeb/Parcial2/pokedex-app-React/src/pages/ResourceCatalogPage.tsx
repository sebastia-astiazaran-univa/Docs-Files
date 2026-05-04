/**
 * ---------------------------------------------------------------------------
 * Catálogo de recursos (Movimientos / Ítems)
 * ---------------------------------------------------------------------------
 * Equivalente a `initResourcePage("moves" | "items")` en vanilla: lista
 * paginada, búsqueda local, fallback por nombre exacto y modal de detalle.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RESOURCE_PAGE_SIZE } from "../constants";
import {
  HttpError,
  fetchItemByName,
  fetchItemDetail,
  fetchMoveByName,
  fetchMoveDetail,
  fetchResourceListPage,
  toResourceEntry,
} from "../services/pokeapi";
import type { EffectEntry, ItemDetail, MoveDetail } from "../types/pokeapi";
import { humanize, parseExactNumericQuery } from "../utils/text";

const MODAL_CLOSE_MS = 280;

export interface ResourceCatalogPageProps {
  mode: "moves" | "items";
}

interface ResourceEntry {
  id: number;
  name: string;
}

function effectText(
  entries: EffectEntry[] | undefined,
  fallbackText: string
): string {
  const effectEntry =
    (entries || []).find((entry) => entry.language?.name === "es") ||
    (entries || []).find((entry) => entry.language?.name === "en") ||
    null;
  const text =
    effectEntry?.short_effect || effectEntry?.effect || "";
  if (!text) return fallbackText;
  return text.replace(/\$effect_chance/g, "N/A");
}

export function ResourceCatalogPage({ mode }: ResourceCatalogPageProps) {
  const isMoves = mode === "moves";
  const noun = isMoves ? "movimientos" : "ítems";
  const nounSingular = isMoves ? "movimiento" : "ítem";
  const endpoint = isMoves ? ("move" as const) : ("item" as const);

  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<ResourceEntry[]>([]);
  const offsetRef = useRef(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loadingLockRef = useRef(false);
  const [status, setStatus] = useState(`Cargando ${noun}…`);
  const [detailById, setDetailById] = useState<
    Record<number, MoveDetail | ItemDetail>
  >({});
  const [openDetailId, setOpenDetailId] = useState<number | null>(null);
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  const requestIdRef = useRef(0);
  const openTriggerRef = useRef<HTMLElement | null>(null);
  const entriesRef = useRef(entries);
  const detailByIdRef = useRef(detailById);

  entriesRef.current = entries;
  detailByIdRef.current = detailById;

  const q = query.trim().toLowerCase();
  const numericId = useMemo(() => parseExactNumericQuery(q), [q]);

  const filteredEntries = useMemo(() => {
    const sorted = [...entries].sort((a, b) => a.id - b.id);
    if (!q) return sorted;
    return sorted.filter((entry) =>
      numericId !== null ? entry.id === numericId : entry.name.includes(q)
    );
  }, [entries, q, numericId]);

  useEffect(() => {
    const shown = filteredEntries.length;
    const loaded = entries.length;
    const totalLabel = hasMore ? `${loaded}+` : String(loaded);
    if (q) {
      setStatus(
        shown
          ? `Se muestran ${shown} ${noun} para "${query.trim()}".`
          : `Sin coincidencias locales para "${query.trim()}".`
      );
      return;
    }
    setStatus(
      `Mostrando ${shown} ${noun}. Catálogo cargado: ${totalLabel}.`
    );
  }, [filteredEntries.length, entries.length, hasMore, noun, q, query]);

  const loadMoreEntries = useCallback(async () => {
    if (loadingLockRef.current || !hasMore) return;
    loadingLockRef.current = true;
    setIsLoading(true);
    const fetchOffset = offsetRef.current;
    try {
      const data = await fetchResourceListPage(
        endpoint,
        fetchOffset,
        RESOURCE_PAGE_SIZE
      );
      const results = (data.results || [])
        .map(toResourceEntry)
        .filter((entry) => Number.isInteger(entry.id) && entry.id > 0);
      setEntries((prev) => {
        const seen = new Set(prev.map((e) => e.id));
        const next = [...prev];
        for (const entry of results) {
          if (!seen.has(entry.id)) {
            seen.add(entry.id);
            next.push(entry);
          }
        }
        return next;
      });
      offsetRef.current = fetchOffset + RESOURCE_PAGE_SIZE;
      setHasMore(Boolean(data.next));
    } catch (e) {
      setStatus(`No se pudieron cargar más ${noun}.`);
      console.error(e);
    } finally {
      loadingLockRef.current = false;
      setIsLoading(false);
    }
  }, [endpoint, hasMore, noun]);

  useEffect(() => {
    void loadMoreEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- arranque
  }, []);

  /**
   * Búsqueda exacta remota (misma lógica que `runSearch` en vanilla).
   * Solo depende de `query` para no re-disparar al paginar el catálogo local.
   */
  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    const numId = parseExactNumericQuery(trimmed);
    const sorted = [...entriesRef.current].sort((a, b) => a.id - b.id);
    const localFiltered = sorted.filter((entry) =>
      numId !== null ? entry.id === numId : entry.name.includes(trimmed)
    );
    if (localFiltered.length > 0) return;

    requestIdRef.current += 1;
    const requestId = requestIdRef.current;
    let cancelled = false;

    setStatus(`Buscando ${nounSingular} exacto en API...`);

    void (async () => {
      try {
        const detail = isMoves
          ? await fetchMoveByName(trimmed)
          : await fetchItemByName(trimmed);
        if (cancelled || requestId !== requestIdRef.current) return;
        setDetailById((prev) => ({ ...prev, [detail.id]: detail }));
        setEntries((prev) => {
          const exists = prev.some((e) => e.id === detail.id);
          if (exists) return prev;
          return [...prev, { id: detail.id, name: detail.name }];
        });
        setStatus(`Coincidencia exacta para ${nounSingular} #${detail.id}.`);
      } catch (e) {
        if (cancelled || requestId !== requestIdRef.current) return;
        if (e instanceof HttpError && e.status === 404) {
          setStatus(`No existe un ${nounSingular} con "${query.trim()}".`);
        } else {
          setStatus(`Error al buscar ${nounSingular}.`);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query, isMoves, nounSingular]);

  const openDetail = useCallback(
    async (id: number) => {
      openTriggerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setOpenDetailId(id);
      setModalLoading(true);
      setModalError(null);
      requestAnimationFrame(() => setIsOpenClass(true));
      document.body.style.overflow = "hidden";
      try {
        let detail = detailByIdRef.current[id];
        if (!detail) {
          detail = isMoves ? await fetchMoveDetail(id) : await fetchItemDetail(id);
          setDetailById((prev) => ({ ...prev, [id]: detail }));
        }
      } catch (e) {
        setModalError(
          `No se pudo cargar el detalle del ${nounSingular}. Intenta de nuevo.`
        );
        console.error(e);
      } finally {
        setModalLoading(false);
      }
    },
    [isMoves, nounSingular]
  );

  const closeDetail = useCallback(() => {
    setIsOpenClass(false);
    document.body.style.overflow = "";
    const trigger = openTriggerRef.current;
    openTriggerRef.current = null;
    window.setTimeout(() => {
      setOpenDetailId(null);
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    }, MODAL_CLOSE_MS);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (openDetailId === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetail();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openDetailId, closeDetail]);

  const detail =
    openDetailId !== null ? detailById[openDetailId] : undefined;

  const intro =
    mode === "moves" ? (
      <p className="intro">
        Consulta movimientos por nombre o ID. Datos obtenidos desde{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          PokeAPI
        </a>
        .
      </p>
    ) : (
      <p className="intro">
        Consulta ítems por nombre o ID. Datos obtenidos desde{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          PokeAPI
        </a>
        .
      </p>
    );

  const titleId = mode === "moves" ? "moves-title" : "items-title";
  const inputId = mode === "moves" ? "moves-search-input" : "items-search-input";
  const listId = mode === "moves" ? "moves-results" : "items-results";
  const statusId = mode === "moves" ? "moves-status" : "items-status";

  return (
    <>
      <main id="main" className="main">
        {intro}

        <section
          className="resource-section glass-panel"
          aria-labelledby={titleId}
        >
          <div className="resource-header">
            <h2 id={titleId}>{isMoves ? "Movimientos" : "Ítems"}</h2>
            <p className="resource-subtitle">
              Búsqueda específica por nombre o ID.
            </p>
          </div>
          <label className="resource-search-field" htmlFor={inputId}>
            <span className="visually-hidden">
              Buscar {noun} por nombre o ID
            </span>
            <input
              type="search"
              id={inputId}
              className="resource-search-input"
              placeholder={
                isMoves
                  ? "Buscar movimiento por nombre o ID…"
                  : "Buscar ítem por nombre o ID…"
              }
              autoComplete="off"
              spellCheck={false}
              aria-controls={listId}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <p id={statusId} className="resource-status" role="status">
            {status}
          </p>
          <ul id={listId} className="resource-list" aria-live="polite">
            {!filteredEntries.length ? (
              <li className="resource-empty" role="status">
                No hay {noun} para mostrar con los filtros actuales.
              </li>
            ) : (
              filteredEntries.map((entry) => (
                <li key={entry.id} className="resource-item">
                  <button
                    type="button"
                    className="resource-item-btn"
                    data-resource-id={entry.id}
                    onClick={() => void openDetail(entry.id)}
                  >
                    <span className="resource-item__name">
                      {humanize(entry.name)}
                    </span>
                    <span className="resource-item__id">
                      #{String(entry.id).padStart(4, "0")}
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>

          <div className="resource-actions">
            <button
              type="button"
              className="resource-load-more"
              hidden={!hasMore || Boolean(q)}
              disabled={isLoading}
              onClick={() => void loadMoreEntries()}
            >
              {isLoading ? "Cargando..." : "Cargar más"}
            </button>
          </div>
        </section>
      </main>

      {openDetailId !== null && (
        <>
          <div
            className={`modal-overlay${isOpenClass ? " is-open" : ""}`}
            aria-hidden="true"
            onClick={closeDetail}
          />
          <section
            className={`modal resource-detail-modal glass-panel${
              isOpenClass ? " is-open" : ""
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-detail-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Cerrar detalle"
              onClick={closeDetail}
            >
              ×
            </button>
            <div className="modal-content">
              {modalLoading && (
                <p className="modal-loading">Cargando detalle...</p>
              )}
              {modalError && <p className="modal-error">{modalError}</p>}
              {!modalLoading && detail && isMoves && (
                <MoveDetailView detail={detail as MoveDetail} />
              )}
              {!modalLoading && detail && !isMoves && (
                <ItemDetailView detail={detail as ItemDetail} />
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

function MoveDetailView({ detail }: { detail: MoveDetail }) {
  const typeValue = detail.type?.name
    ? humanize(detail.type.name)
    : "No disponible";
  const damageClass = detail.damage_class?.name
    ? humanize(detail.damage_class.name)
    : "No disponible";
  const power = Number.isInteger(detail.power) ? detail.power : "No disponible";
  const accuracy = Number.isInteger(detail.accuracy)
    ? `${detail.accuracy}%`
    : "No disponible";
  const pp = Number.isInteger(detail.pp) ? detail.pp : "No disponible";
  const priority = Number.isInteger(detail.priority)
    ? detail.priority
    : "No disponible";
  const shortEffect = effectText(
    detail.effect_entries,
    "Sin efecto registrado."
  );
  return (
    <div className="resource-detail">
      <div className="resource-detail__heading">
        <h2 id="resource-detail-title">{humanize(detail.name)}</h2>
        <span className="resource-detail__id">
          #{String(detail.id).padStart(4, "0")}
        </span>
      </div>
      <dl className="resource-detail__grid">
        <dt>Tipo</dt>
        <dd>{typeValue}</dd>
        <dt>Clase de daño</dt>
        <dd>{damageClass}</dd>
        <dt>Poder</dt>
        <dd>{String(power)}</dd>
        <dt>Precisión</dt>
        <dd>{String(accuracy)}</dd>
        <dt>PP</dt>
        <dd>{String(pp)}</dd>
        <dt>Prioridad</dt>
        <dd>{String(priority)}</dd>
      </dl>
      <h3>Efecto breve</h3>
      <p>{shortEffect}</p>
    </div>
  );
}

function ItemDetailView({ detail }: { detail: ItemDetail }) {
  const category = detail.category?.name
    ? humanize(detail.category.name)
    : "No disponible";
  const cost = Number.isInteger(detail.cost) ? detail.cost : "No disponible";
  const flingPower = Number.isInteger(detail.fling_power)
    ? detail.fling_power
    : "No disponible";
  const flingEffect = detail.fling_effect?.name
    ? humanize(detail.fling_effect.name)
    : "No disponible";
  const shortEffect = effectText(
    detail.effect_entries,
    "Sin efecto registrado."
  );
  return (
    <div className="resource-detail">
      <div className="resource-detail__heading">
        <h2 id="resource-detail-title">{humanize(detail.name)}</h2>
        <span className="resource-detail__id">
          #{String(detail.id).padStart(4, "0")}
        </span>
      </div>
      <dl className="resource-detail__grid">
        <dt>Categoría</dt>
        <dd>{category}</dd>
        <dt>Costo</dt>
        <dd>{String(cost)}</dd>
        <dt>Fling power</dt>
        <dd>{String(flingPower)}</dd>
        <dt>Fling effect</dt>
        <dd>{flingEffect}</dd>
      </dl>
      <h3>Efecto breve</h3>
      <p>{shortEffect}</p>
    </div>
  );
}
