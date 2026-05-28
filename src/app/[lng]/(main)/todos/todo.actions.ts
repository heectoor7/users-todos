"use server"

import { revalidateTag } from "next/cache";

export const refreshTodosAction = async () => {
  revalidateTag("todos", "page");
}