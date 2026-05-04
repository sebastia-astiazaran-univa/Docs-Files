/**
 * ---------------------------------------------------------------------------
 * Tarjeta de Pokémon (lista principal y resultados de búsqueda)
 * ---------------------------------------------------------------------------
 * Equivalente a `createCardElement()` en vanilla: muestra arte, ID, nombre,
 * tipos y botón “Ver más”. La visibilidad por búsqueda se controla en el padre
 * con clases o filtrado; aquí mantenemos `hidden` opcional para paridad CSS.
 */

import type { NormalizedPokemon } from "../../types/pokeapi";

export interface PokemonCardProps {
  pokemon: NormalizedPokemon;
  onOpenDetails: (id: number) => void;
  /** Si false, aplica la clase `pokemon-card--hidden` como en vanilla. */
  visible?: boolean;
}

export function PokemonCard({
  pokemon,
  onOpenDetails,
  visible = true,
}: PokemonCardProps) {
  return (
    <article
      className={`pokemon-card${visible ? "" : " pokemon-card--hidden"}`}
      data-name={pokemon.name.toLowerCase()}
      data-id={String(pokemon.id)}
      role="listitem"
    >
      <div className="pokemon-card__inner">
        <div className="pokemon-card__art">
          <img
            src={pokemon.artworkUrl}
            alt={`Arte oficial de ${pokemon.name}`}
            width={88}
            height={88}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="pokemon-card__body">
          <span className="pokemon-card__id">
            #{String(pokemon.id).padStart(4, "0")}
          </span>
          <h2 className="pokemon-card__name">{pokemon.name}</h2>
          <div className="pokemon-card__types">
            {pokemon.types.map((t) => (
              <span key={t} className={`type-badge type-${t}`}>
                {t}
              </span>
            ))}
          </div>
          <button
            type="button"
            className="btn-details"
            data-id={pokemon.id}
            onClick={() => onOpenDetails(pokemon.id)}
          >
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}
