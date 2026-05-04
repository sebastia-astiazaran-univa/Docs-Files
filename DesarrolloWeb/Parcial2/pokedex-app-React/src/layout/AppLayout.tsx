/**
 * ---------------------------------------------------------------------------
 * Layout principal: cabecera fija, navegación, tema y `<Outlet />`
 * ---------------------------------------------------------------------------
 * Sustituye la estructura repetida en cada `*.html` vanilla (header + main).
 * El contenido de cada ruta se renderiza en `<Outlet />`.
 */

import { useCallback, useState, type ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

/** Contexto pasado a rutas hijas (registro de UI extra en header). */
export type AppLayoutOutletContext = {
  setHeaderExtra: (node: ReactNode | null) => void;
};

export function AppLayout() {
  const { toggleTheme } = useTheme();
  const [headerExtra, setHeaderExtra] = useState<ReactNode>(null);

  const stableSetHeaderExtra = useCallback((node: ReactNode | null) => {
    setHeaderExtra(node);
  }, []);

  const outletContext: AppLayoutOutletContext = {
    setHeaderExtra: stableSetHeaderExtra,
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="header-inner glass-panel">
          <div className="brand">
            <span className="brand-icon" aria-hidden="true">
              ⚡
            </span>
            <h1 className="brand-title">Pokédex Nacional</h1>
          </div>

          <nav className="section-nav" aria-label="Secciones de la Pokédex">
            <NavLink
              className={({ isActive }) =>
                `section-link${isActive ? " active" : ""}`
              }
              to="/"
              end
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `section-link${isActive ? " active" : ""}`
              }
              to="/movimientos"
            >
              Movimientos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `section-link${isActive ? " active" : ""}`
              }
              to="/items"
            >
              Ítems
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `section-link${isActive ? " active" : ""}`
              }
              to="/equipo"
            >
              Mi equipo
            </NavLink>
          </nav>

          <div className="header-controls">
            {headerExtra}
            <button
              type="button"
              className="btn-theme"
              aria-label="Alternar modo claro u oscuro"
              title="Tema"
              onClick={toggleTheme}
            >
              <span className="theme-icon theme-icon--sun" aria-hidden="true">
                ☀
              </span>
              <span className="theme-icon theme-icon--moon" aria-hidden="true">
                ☾
              </span>
            </button>
          </div>
        </div>
      </header>

      <Outlet context={outletContext} />
    </>
  );
}
