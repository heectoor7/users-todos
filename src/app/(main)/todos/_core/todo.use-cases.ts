import { getTodosServices } from "./todo.services";

export const getTodosUseCase = async (query?: string) => {
  const todos = await getTodosServices();

  if(query) {
    return todos.filter((todo) => todo.texto.toLowerCase().includes(query.toLowerCase()));
  }

  return todos;
}