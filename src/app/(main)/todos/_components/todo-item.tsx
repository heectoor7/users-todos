import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoT } from "../_core/todo.definitions";

export function TodoItem({ todo }: { todo: TodoT }) {
  return (
    <Card className="flex bg-primary/20 border border-gray-300 max-w-md gap-0 my-5 hover:transition-transform hover:scale-105">
      <CardHeader>
        <CardTitle>{todo.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>{todo.texto}</div>
        <div>
          {todo.completada ? (
            <span className="text-green-500 ml-2">Completada</span>
          ) : (
            <span className="text-red-500 ml-2">Pendiente</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
