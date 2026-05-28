import { getTodosUseCase } from "../_core/todo.use-cases";
import { TodoList } from "./todo-list";

export async function TodoContent({ 
  searchParams 
}: { 
  searchParams: Promise<{ query?: string }> 
}) {
  const params = await searchParams; // ✅ ahora está dentro de Suspense
  const query = params.query || "";
  const todos = await getTodosUseCase(query);

  return (
    <>
      {query ? (
        <p className="pb-4 text-gray-700">
          Resultados para <span className="font-semibold">{query}</span>: {todos.length}
        </p>
      ) : (
        <p className="pb-4 text-gray-700">Número de tareas: {todos.length}</p>
      )}
      <TodoList todos={todos} />
    </>
  );
}