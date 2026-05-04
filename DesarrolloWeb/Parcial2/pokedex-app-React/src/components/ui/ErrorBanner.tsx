/**
 * ---------------------------------------------------------------------------
 * Banner de error accesible (Inicio / Equipo)
 * ---------------------------------------------------------------------------
 * Misma semántica que `#error-banner` en los HTML vanilla.
 */

export interface ErrorBannerProps {
  message: string | null;
}

export function ErrorBanner({ message }: ErrorBannerProps) {
  if (!message) return null;
  return (
    <div id="error-banner" className="error-banner" role="alert">
      {message}
    </div>
  );
}
