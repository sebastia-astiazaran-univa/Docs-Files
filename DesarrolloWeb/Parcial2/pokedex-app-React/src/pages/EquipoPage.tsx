/**
 * ---------------------------------------------------------------------------
 * Página Mi equipo: búsqueda, alta/baja y apodos (localStorage vía contexto)
 * ---------------------------------------------------------------------------
 * Equivalente a `initEquipoPage()` en vanilla. Persistencia centralizada en
 * `TeamProvider` para mantener la misma fuente de verdad en toda la SPA.
 */

import type { FormEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TEAM_LIMIT, officialArtworkUrl } from "../constants";
import { useTeam } from "../context/TeamContext";
import { ErrorBanner } from "../components/ui/ErrorBanner";
import { HttpError, fetchPokemonDetail } from "../services/pokeapi";
import type { PokemonDetail } from "../types/pokeapi";
import { humanize } from "../utils/text";

export function EquipoPage() {
  const { team, addToTeam, removeFromTeam, saveNickname, isInTeam } =
    useTeam();

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Escribe un nombre o ID para buscar."
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resultPokemon, setResultPokemon] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [detailById, setDetailById] = useState<Record<number, PokemonDetail>>(
    {}
  );
  const detailByIdRef = useRef(detailById);
  detailByIdRef.current = detailById;

  const hideError = useCallback(() => setErrorMessage(null), []);

  const teamIdsKey = useMemo(() => team.map((t) => t.id).join(","), [team]);

  /** Precarga detalles de los Pokémon ya guardados en el equipo. */
  useEffect(() => {
    if (!teamIdsKey) return;
    let cancelled = false;
    const ids = team.map((t) => t.id);
    void (async () => {
      const pending = ids.filter((id) => !detailByIdRef.current[id]);
      const rows = await Promise.all(
        pending.map(async (id) => {
          try {
            const d = await fetchPokemonDetail(id);
            return { id, d } as const;
          } catch (e) {
            console.error(e);
            return null;
          }
        })
      );
      if (cancelled) return;
      setDetailById((prev) => {
        const next = { ...prev };
        for (const row of rows) {
          if (row) next[row.id] = row.d;
        }
        return next;
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [teamIdsKey, team]);

  const getOriginalName = useCallback(
    (id: number) => detailById[id]?.name ?? `pokemon-${id}`,
    [detailById]
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    hideError();
    const q = query.trim().toLowerCase();
    if (!q) {
      setStatus("Escribe un nombre o ID válido.");
      setResultPokemon(null);
      return;
    }
    setStatus("Buscando Pokémon...");
    try {
      const data = await fetchPokemonDetail(q);
      setDetailById((prev) => ({ ...prev, [data.id]: data }));
      setResultPokemon({ id: data.id, name: data.name });
      setStatus(
        `Pokémon encontrado: ${humanize(data.name)} (#${data.id}).`
      );
    } catch (e2) {
      setResultPokemon(null);
      if (e2 instanceof HttpError && e2.status === 404) {
        setStatus(`No existe un Pokémon con "${q}".`);
      } else {
        setStatus("Error de red al buscar Pokémon.");
      }
    }
  };

  const handleAddOrRemove = (id: number, remove: boolean) => {
    if (remove) {
      removeFromTeam(id);
      return;
    }
    const res = addToTeam(id);
    if (!res.ok && res.reason === "full") {
      setErrorMessage(`Tu equipo ya tiene ${TEAM_LIMIT} Pokémon.`);
    } else {
      hideError();
    }
  };

  const teamCountLabel = useMemo(() => `${team.length}`, [team.length]);

  return (
    <>
      <ErrorBanner message={errorMessage} />

      <main id="main" className="main">
        <p className="intro">
          Busca Pokémon por nombre o ID para agregarlos a tu equipo (máximo{" "}
          {TEAM_LIMIT}).
        </p>

        <section
          className="resource-section glass-panel"
          aria-labelledby="team-search-title"
        >
          <div className="resource-header">
            <h2 id="team-search-title">Agregar Pokémon</h2>
            <p className="resource-subtitle">Búsqueda exacta por nombre o ID.</p>
          </div>
          <form className="team-search-form" noValidate onSubmit={onSubmit}>
            <label className="resource-search-field" htmlFor="team-search-input">
              <span className="visually-hidden">
                Buscar Pokémon para agregar al equipo
              </span>
              <input
                type="search"
                id="team-search-input"
                className="resource-search-input"
                placeholder="Ej. pikachu o 25"
                autoComplete="off"
                spellCheck={false}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <button type="submit" className="btn-details">
              Buscar
            </button>
          </form>
          <p id="team-search-status" className="resource-status" role="status">
            {status}
          </p>
          <div id="team-search-result" className="team-search-result">
            {resultPokemon && (
              <article className="team-search-card">
                <img
                  src={officialArtworkUrl(resultPokemon.id)}
                  alt={`Arte oficial de ${resultPokemon.name}`}
                  width={96}
                  height={96}
                />
                <div className="team-search-card__body">
                  <h3>{humanize(resultPokemon.name)}</h3>
                  <p>#{String(resultPokemon.id).padStart(4, "0")}</p>
                  <button
                    type="button"
                    className="btn-team"
                    data-team-action={
                      isInTeam(resultPokemon.id) ? "remove" : "add"
                    }
                    data-id={resultPokemon.id}
                    onClick={() =>
                      handleAddOrRemove(
                        resultPokemon.id,
                        isInTeam(resultPokemon.id)
                      )
                    }
                  >
                    {isInTeam(resultPokemon.id)
                      ? "Quitar del equipo"
                      : "Agregar al equipo"}
                  </button>
                </div>
              </article>
            )}
          </div>
        </section>

        <section
          className="team-section glass-panel"
          aria-labelledby="team-title"
        >
          <div className="team-header">
            <h2 id="team-title">Mi equipo Pokémon</h2>
            <p className="team-count">
              <span id="team-count">{teamCountLabel}</span>/{TEAM_LIMIT}
            </p>
          </div>
          <p
            id="team-empty"
            className="team-empty"
            hidden={team.length !== 0}
          >
            Aún no has agregado Pokémon a tu equipo.
          </p>
          <ul id="team-list" className="team-list" aria-live="polite">
            {team.map((entry) => {
              const original = humanize(getOriginalName(entry.id));
              const displayNickname = entry.nickname
                ? humanize(entry.nickname)
                : "Sin apodo";
              return (
                <li key={entry.id} className="team-item">
                  <img
                    src={officialArtworkUrl(entry.id)}
                    alt={`Sprite de ${original}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="team-item__meta">
                    <strong>{displayNickname}</strong>
                    <span className="team-item__original">
                      {original} · #{String(entry.id).padStart(4, "0")}
                    </span>
                  </div>
                  <div className="team-item__nickname">
                    <label className="visually-hidden" htmlFor={`nick-${entry.id}`}>
                      Apodo de {original}
                    </label>
                    {/* Persistir solo al salir del campo (equiv. a `change` en vanilla) o al pulsar Guardar; no en cada tecla. */}
                    <input
                      id={`nick-${entry.id}`}
                      key={`${entry.id}-${entry.nickname}`}
                      className="team-nickname-input"
                      type="text"
                      maxLength={20}
                      placeholder="Sin apodo"
                      defaultValue={entry.nickname}
                      data-nickname-input
                      data-id={entry.id}
                      onBlur={(e) => saveNickname(entry.id, e.target.value)}
                    />
                    <button
                      type="button"
                      className="team-save-btn"
                      data-team-action="save-nickname"
                      data-id={entry.id}
                      onClick={(e) => {
                        const root = e.currentTarget.closest(".team-item");
                        const input = root?.querySelector<HTMLInputElement>(
                          `[data-nickname-input][data-id="${entry.id}"]`
                        );
                        saveNickname(entry.id, input?.value ?? "");
                      }}
                    >
                      Guardar apodo
                    </button>
                  </div>
                  <div className="team-item__actions">
                    <button
                      type="button"
                      className="team-remove-btn"
                      data-team-action="remove"
                      data-id={entry.id}
                      onClick={() => removeFromTeam(entry.id)}
                    >
                      Quitar del equipo
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
