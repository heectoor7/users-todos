import { z } from "zod";

export const ApiTodoSchema = z.object({ id: z.number(), title: z.string(), completed: z.boolean() })
export type ApiTodoT = z.infer<typeof ApiTodoSchema>

export const TodoSchema = z.object({ id: z.string(), texto: z.string(), completada: z.boolean() })
export type TodoT = z.infer<typeof TodoSchema>

export const todoAdapter = (api: ApiTodoT) : TodoT => ({
  id: api.id.toString(),
  texto: api.title.toUpperCase(),
  completada: api.completed,
})