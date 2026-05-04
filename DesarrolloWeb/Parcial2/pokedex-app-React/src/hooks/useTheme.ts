/**
 * ---------------------------------------------------------------------------
 * Hook de tema claro/oscuro (prefers-color-scheme + localStorage)
 * ---------------------------------------------------------------------------
 * Replica `initTheme()` de vanilla: lee `pokedex-theme`, aplica `data-theme`
 * en `<html>` y alterna al hacer clic en el botón.
 */

import { useCallback, useEffect, useState } from "react";
import { THEME_KEY } from "../constants";

export type ThemeMode = "light" | "dark";

function readStoredTheme(): ThemeMode | null {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function applyDomTheme(mode: ThemeMode | null) {
  if (mode) {
    document.documentElement.setAttribute("data-theme", mode);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export function useTheme() {
  const [stored, setStored] = useState<ThemeMode | null>(() =>
    typeof window === "undefined" ? null : readStoredTheme()
  );

  useEffect(() => {
    applyDomTheme(stored);
  }, [stored]);

  /** Sincroniza tema guardado al montar (por si SSR o hidratación). */
  useEffect(() => {
    setStored(readStoredTheme());
    applyDomTheme(readStoredTheme());
  }, []);

  const toggleTheme = useCallback(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effectiveDark = attr === "dark" || (!attr && prefersDark);
    const next: ThemeMode = effectiveDark ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    setStored(next);
  }, []);

  return { toggleTheme };
}
