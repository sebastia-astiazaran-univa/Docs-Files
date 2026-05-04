/**
 * ---------------------------------------------------------------------------
 * Contexto del equipo Pokémon (localStorage + acciones compartidas)
 * ---------------------------------------------------------------------------
 * En vanilla, el equipo se guardaba en `localStorage` y se manipulaba desde
 * Inicio (modal) y Equipo. En React centralizamos estado y efectos secundarios
 * aquí para que cualquier página pueda leer/actualizar el mismo equipo.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { TEAM_KEY, TEAM_LIMIT } from "../constants";
import type { TeamEntry } from "../types/pokeapi";

export interface TeamContextValue {
  team: TeamEntry[];
  isInTeam: (id: number) => boolean;
  addToTeam: (id: number) => { ok: true } | { ok: false; reason: "full" | "exists" };
  removeFromTeam: (id: number) => void;
  saveNickname: (id: number, nickname: string) => void;
}

const TeamContext = createContext<TeamContextValue | null>(null);

/**
 * Carga el equipo desde localStorage con el mismo formato tolerante que vanilla.
 */
function loadTeamFromStorage(): TeamEntry[] {
  try {
    const raw = localStorage.getItem(TEAM_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const normalized: TeamEntry[] = [];
    for (const entry of parsed) {
      if (typeof entry === "number" && Number.isInteger(entry)) {
        normalized.push({ id: entry, nickname: "" });
        continue;
      }
      if (!entry || typeof entry !== "object") continue;
      const rec = entry as { id?: unknown; nickname?: unknown };
      const id = Number(rec.id);
      if (!Number.isInteger(id) || id <= 0) continue;
      const nickname =
        typeof rec.nickname === "string" ? rec.nickname.trim() : "";
      normalized.push({ id, nickname });
    }
    return normalized.slice(0, TEAM_LIMIT);
  } catch {
    return [];
  }
}

function persistTeam(team: TeamEntry[]) {
  localStorage.setItem(TEAM_KEY, JSON.stringify(team));
}

export function TeamProvider({ children }: { children: ReactNode }) {
  const [team, setTeam] = useState<TeamEntry[]>(() => loadTeamFromStorage());

  const isInTeam = useCallback(
    (id: number) => team.some((e) => e.id === id),
    [team]
  );

  const addToTeam = useCallback(
    (id: number): { ok: true } | { ok: false; reason: "full" | "exists" } => {
      if (isInTeam(id)) return { ok: false, reason: "exists" };
      if (team.length >= TEAM_LIMIT) return { ok: false, reason: "full" };
      const next = [...team, { id, nickname: "" }];
      setTeam(next);
      persistTeam(next);
      return { ok: true };
    },
    [isInTeam, team]
  );

  const removeFromTeam = useCallback((id: number) => {
    setTeam((prev) => {
      const next = prev.filter((e) => e.id !== id);
      if (next.length === prev.length) return prev;
      persistTeam(next);
      return next;
    });
  }, []);

  const saveNickname = useCallback((id: number, nicknameRaw: string) => {
    const nickname = String(nicknameRaw ?? "").trim();
    setTeam((prev) => {
      const next = prev.map((e) =>
        e.id === id ? { ...e, nickname } : e
      );
      persistTeam(next);
      return next;
    });
  }, []);

  const value = useMemo<TeamContextValue>(
    () => ({
      team,
      isInTeam,
      addToTeam,
      removeFromTeam,
      saveNickname,
    }),
    [team, isInTeam, addToTeam, removeFromTeam, saveNickname]
  );

  return (
    <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
  );
}

export function useTeam(): TeamContextValue {
  const ctx = useContext(TeamContext);
  if (!ctx) {
    throw new Error("useTeam debe usarse dentro de TeamProvider");
  }
  return ctx;
}
