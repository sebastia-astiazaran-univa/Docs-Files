"use client";

import { useState } from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  const materias = ["Limites", "Derivadas", "Regla de la cadena"];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Ejemplos en page.tsx</h1>

      <section className="space-y-3 rounded border p-4">
        <h2 className="text-xl font-semibold">1) Componente reutilizable</h2>
        <MyButton />
      </section>

      <section className="space-y-3 rounded border p-4">
        <h2 className="text-xl font-semibold">2) Estado con useState</h2>
        <p>Contador: {contador}</p>
        <button
          className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          onClick={() => setContador(contador + 1)}
        >
          Sumar 1
        </button>
      </section>

      <section className="space-y-3 rounded border p-4">
        <h2 className="text-xl font-semibold">3) Input controlado</h2>
        <MyInput
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={setNombre}
        />
        <p>Hola, {nombre || "estudiante"}.</p>
      </section>

      <section className="space-y-3 rounded border p-4">
        <h2 className="text-xl font-semibold">4) Renderizado de listas</h2>
        <ul className="list-inside list-disc">
          {materias.map((materia) => (
            <li key={materia}>{materia}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
