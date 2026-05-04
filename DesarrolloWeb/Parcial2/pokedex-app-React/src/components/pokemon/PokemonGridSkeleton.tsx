/**
 * ---------------------------------------------------------------------------
 * Skeleton de tarjetas (carga de lotes en Inicio)
 * ---------------------------------------------------------------------------
 * Replica el HTML generado por `renderSkeletons()` en vanilla.
 */

export function PokemonGridSkeleton({ count }: { count: number }) {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <>
      {items.map((i) => (
        <div key={i} className="skeleton-card" aria-hidden="true">
          <div className="skeleton-card__inner">
            <div className="skeleton-block skeleton-avatar" />
            <div className="skeleton-lines">
              <div className="skeleton-block skeleton-line skeleton-line--short" />
              <div className="skeleton-block skeleton-line" />
              <div
                className="skeleton-block skeleton-line"
                style={{ width: "70%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
