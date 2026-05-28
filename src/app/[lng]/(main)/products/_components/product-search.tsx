"use client";

import { useState, useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { useHydrate } from "@/hooks/useHydrate";
import { TbEraser } from "react-icons/tb";

export function TodoSearch({ query }: { query: string }) {
  const [text, setText] = useState(query);
  const hydrated = useHydrate();
  const [isPending, setIsPending] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (text === query) return;

    const timer = setTimeout(() => {
      redirect(`/todos?query=${encodeURIComponent(text)}`);
    }, 1500);

    return () => clearTimeout(timer);
  }, [text, query]);

  const handleClear = () => {
    setText("");
    redirect(pathname);
  };

  return (
    <form method="GET" action="/todos" className="mb-8 flex gap-2">
      <input
        name="query"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoComplete="off"
        placeholder="Escribe para buscar..."
        className="border p-2 rounded w-full text-black outline-none focus:ring-2 focus:ring-blue-500"
      />

      {hydrated && query && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-red-800 px-4 py-2 rounded flex items-center"
        >
          <TbEraser className="size-5" />
        </button>
      )}
    </form>
  );
}
