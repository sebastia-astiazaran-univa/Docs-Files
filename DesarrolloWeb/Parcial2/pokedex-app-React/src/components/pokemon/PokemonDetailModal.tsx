/**
 * ---------------------------------------------------------------------------
 * Modal de detalle de Pokémon (Inicio)
 * ---------------------------------------------------------------------------
 * Equivalente a `openModal`, `closeModal` y `renderModalDetail` en vanilla.
 * Incluye estadísticas, movimientos (12), ítems y acción de equipo.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { useTeam } from "../../context/TeamContext";
import { fetchPokemonDetail, normalizePokemon } from "../../services/pokeapi";
import type { PokemonDetail } from "../../types/pokeapi";
import { humanize } from "../../utils/text";

const MODAL_CLOSE_MS = 280;

export interface PokemonDetailModalProps {
  /** Si el modal debe mostrarse (antes de animación). */
  open: boolean;
  /** ID del Pokémon a cargar; null cierra sin contenido. */
  pokemonId: number | null;
  onClose: () => void;
  /** Mensajes de error globales (límite de equipo, etc.). */
  onTeamError?: (message: string) => void;
}

export function PokemonDetailModal({
  open,
  pokemonId,
  onClose,
  onTeamError,
}: PokemonDetailModalProps) {
  const { isInTeam, addToTeam, removeFromTeam } = useTeam();
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [detail, setDetail] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const openTriggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /** Restaura scroll del body si el modal se desmonta abruptamente. */
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /** Animación de entrada/salida al estilo vanilla (requestAnimationFrame). */
  useEffect(() => {
    if (open && pokemonId) {
      openTriggerRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setLoading(true);
      setError(null);
      setDetail(null);
      let cancelled = false;
      void (async () => {
        try {
          const data = await fetchPokemonDetail(pokemonId);
          if (!cancelled) {
            setDetail(data);
            setLoading(false);
          }
        } catch (e) {
          if (!cancelled) {
            setLoading(false);
            setError("No se pudo cargar el detalle.");
            console.error(e);
          }
        }
      })();
      requestAnimationFrame(() => setIsOpenClass(true));
      document.body.style.overflow = "hidden";
      return () => {
        cancelled = true;
      };
    }

    if (!open) {
      setIsOpenClass(false);
      document.body.style.overflow = "";
    }
    return undefined;
  }, [open, pokemonId]);

  /** Enfoca el botón cerrar al terminar de cargar (accesibilidad). */
  useEffect(() => {
    if (open && pokemonId && !loading) {
      closeBtnRef.current?.focus();
    }
  }, [open, pokemonId, loading]);

  const handleClose = useCallback(() => {
    setIsOpenClass(false);
    document.body.style.overflow = "";
    const trigger = openTriggerRef.current;
    openTriggerRef.current = null;
    window.setTimeout(() => {
      onClose();
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    }, MODAL_CLOSE_MS);
  }, [onClose]);

  /** Escape para cerrar (misma regla que vanilla). */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  if (!open || pokemonId === null) return null;

  const pokemon = detail ? normalizePokemon(detail) : null;
  const inTeam = pokemon ? isInTeam(pokemon.id) : false;

  const handleTeamClick = () => {
    if (!pokemon) return;
    if (inTeam) {
      removeFromTeam(pokemon.id);
      return;
    }
    const res = addToTeam(pokemon.id);
    if (!res.ok && res.reason === "full") {
      onTeamError?.(`Tu equipo ya tiene 6 Pokémon.`);
    }
  };

  return (
    <>
      <div
        className={`modal-overlay${isOpenClass ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={handleClose}
      />
      <div
        className={`modal glass-panel${isOpenClass ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="modal-close"
          aria-label="Cerrar detalle"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="modal-content">
          {loading && <p className="modal-loading">Cargando detalle…</p>}
          {error && <p className="modal-error">{error}</p>}
          {!loading && detail && pokemon && (
            <>
              <div className="modal-hero">
                <img
                  src={pokemon.artworkUrl}
                  alt={`Arte oficial de ${pokemon.name}`}
                  width={220}
                  height={220}
                />
                <div className="modal-title-row">
                  <h2 id="modal-title">{pokemon.name}</h2>
                  <span className="modal-id">
                    #{String(pokemon.id).padStart(4, "0")}
                  </span>
                </div>
                <div className="modal-types">
                  {pokemon.types.map((t) => (
                    <span key={t} className={`type-badge type-${t}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-team"
                  data-team-action={inTeam ? "remove" : "add"}
                  data-id={pokemon.id}
                  onClick={handleTeamClick}
                >
                  {inTeam ? "Quitar del equipo" : "Agregar al equipo"}
                </button>
              </div>

              <h3 className="modal-section-title">Estadísticas base</h3>
              {(detail.stats || []).map((s) => {
                const base = s.base_stat;
                const pct = Math.min(100, Math.round((base / 255) * 100));
                return (
                  <div key={s.stat.name} className="stat-row">
                    <span className="stat-name">
                      {s.stat.name.slice(0, 3).toUpperCase()}
                    </span>
                    <div className="stat-bar-wrap">
                      <div className="stat-bar" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="stat-value">{base}</span>
                  </div>
                );
              })}

              <h3 className="modal-section-title">Movimientos (primeros 12)</h3>
              {(detail.moves || []).length > 0 ? (
                <ul className="abilities-list">
                  {(detail.moves || []).slice(0, 12).map((m) => (
                    <li key={m.move.name} className="ability-pill">
                      {humanize(m.move.name)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="modal-meta">Sin movimientos listados.</p>
              )}

              <h3 className="modal-section-title">Ítems relacionados</h3>
              {(detail.held_items || []).length > 0 ? (
                <ul className="abilities-list">
                  {(detail.held_items || []).map((hi) => (
                    <li key={hi.item.name} className="ability-pill">
                      {humanize(hi.item.name)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="modal-meta">Sin ítems relacionados en la API.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
