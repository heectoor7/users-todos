import { getTodosUseCase } from "./_core/todo.use-cases";
import { TodoSearch } from "./_components/todo-search";
import { TodoList } from "./_components/todo-list";
import { getSession } from "../../(auth)/auth.actions";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function TodosPage({ searchParams }: Props) {
  const session = await getSession();

  if(!session.isLoggedIn) {
    redirect("/");
  }

  const params = await searchParams;
  const query = params.query || "";

  console.log("🔎 Query detectado:", query);

  const todos = await getTodosUseCase(query);

  console.log("📦 Tareas enviadas al cliente:", todos.length);

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>

      <TodoSearch />
      {query ? (
        <p className="pb-4 text-gray-700">
          Resultados para <span className="font-semibold">{query}</span>: {todos.length}
        </p>
      ) : (
        <p className="pb-4 text-gray-700">Número de tareas: {todos.length}</p>
      )}

      <TodoList todos={todos} />
    </main>
  );
}