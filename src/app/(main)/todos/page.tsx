// src/app/(main)/todos/page.tsx
import { Suspense } from "react";
import { TodoSearch } from "./_components/todo-search";
import { TodoContent } from "./_components/todo-content";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default function TodosPage({ searchParams }: Props) {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
      <Suspense fallback={null}> {/* ✅ envuelve TodoSearch */}
        <TodoSearch />
      </Suspense>
      <Suspense fallback={<p>Cargando tareas...</p>}>
        <TodoContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}