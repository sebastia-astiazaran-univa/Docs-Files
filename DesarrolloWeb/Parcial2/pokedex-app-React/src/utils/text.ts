/**
 * ---------------------------------------------------------------------------
 * Utilidades de texto (normalización, consultas numéricas)
 * ---------------------------------------------------------------------------
 * Equivalente a las funciones auxiliares de `app.js` en la versión vanilla.
 */

/**
 * Convierte guiones en espacios para mostrar nombres más legibles.
 */
export function humanize(str: unknown): string {
  return String(str ?? "").replace(/-/g, " ");
}

/**
 * Si la cadena es solo dígitos, devuelve el entero positivo; si no, null.
 * Se usa para búsquedas exactas por ID nacional.
 */
export function parseExactNumericQuery(query: string): number | null {
  if (!/^\d+$/.test(query)) return null;
  const value = Number(query);
  return Number.isInteger(value) && value > 0 ? value : null;
}
