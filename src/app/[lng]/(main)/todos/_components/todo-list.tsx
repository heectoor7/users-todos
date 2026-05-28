import { TodoT } from "../_core/todo.definitions";
import { TodoItem } from "./todo-item";

export function TodoList({ todos }: { todos: TodoT[] }) {
  return (
    <ul>
      {todos.length === 0 ? (
        <li className="p-4 text-gray-500 italic">
          No se encontraron tareas.
        </li>
      ) : (
        <div className="flex w-full justify-center">
          <div className="gap-6 md:grid md:grid-cols-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}
    </ul>
  );
}
