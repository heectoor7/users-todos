"use client";

import { useQueryState, parseAsString } from "nuqs";
import { useTransition } from "react";
import { TbEraser } from "react-icons/tb";

export function TodoSearch() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useQueryState(
    "query",
    parseAsString.withOptions({
      shallow: false,      
      startTransition,     
      throttleMs: 1500, 
    }).withDefault("")
  );

  return (
    <div className="mb-4 flex gap-2 w-full max-w-md relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escribe para buscar..."
        className={`border p-2 rounded w-full text-black outline-none focus:ring-2 focus:ring-blue-500 transition-opacity ${
          isPending ? "opacity-50" : "opacity-100"
        }`}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-red-700 p-1 hover:bg-gray-100 rounded"
        >
          <TbEraser size={20} />
        </button>
      )}
    </div>
  );
}