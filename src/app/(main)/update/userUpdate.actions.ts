"use server";

import { searchUserUseCase } from "@/app/_shared/userInfo/_core/userInfo.use-cases";

export const searchUserAction = async (query: string) => {
  const data = await searchUserUseCase(query);

  if (data) {
    return { success: true, data };
  }

  return { success: false, error: "Usuario no encontrado" };
};