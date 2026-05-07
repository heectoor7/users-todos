"use client";

import Link from "next/link";
import { useQueryState } from "nuqs";
import { useEffect } from "react";
import { useHydrate } from "@/hooks/useHydrate";

export function TodoSearch() {
  const hydrated = useHydrate();

  const [query, setQuery] = useQueryState("query", {
    defaultValue: "",
    clearOnDefault: true,
    shallow: false,
    throttleMs: 500,
  });

  useEffect(() => {
    console.log("🔍 Query de búsqueda actualizada:", query);
  }, [query]);

  return (
    <form method="GET" action="/todos" className="mb-8 flex gap-2">
      <input
        name="query"
        defaultValue={query}
        placeholder="Buscar tarea y pulsa Enter..."
        className="border p-2 rounded w-full text-black outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
      {hydrated && query && (
        <Link
          href="/todos"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center"
        >
          Limpiar
        </Link>
      )}
    </form>
  );
}
