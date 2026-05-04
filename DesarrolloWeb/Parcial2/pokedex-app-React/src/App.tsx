/**
 * ---------------------------------------------------------------------------
 * Enrutamiento principal de la SPA
 * ---------------------------------------------------------------------------
 * Cada ruta corresponde a un HTML distinto en la versión vanilla
 * (`index.html`, `movimientos.html`, `items.html`, `equipo.html`).
 */

import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { EquipoPage } from "./pages/EquipoPage";
import { InicioPage } from "./pages/InicioPage";
import { ResourceCatalogPage } from "./pages/ResourceCatalogPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<InicioPage />} />
        <Route
          path="movimientos"
          element={<ResourceCatalogPage mode="moves" />}
        />
        <Route path="items" element={<ResourceCatalogPage mode="items" />} />
        <Route path="equipo" element={<EquipoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
