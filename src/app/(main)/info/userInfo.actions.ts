"use server";

import { searchUserUseCase } from "@/app/_shared/userInfo/_core/userInfo.use-cases";
import { createServerAction } from "zsa";
import { z } from "zod";

// 1. Definimos la acción con ZSA
export const searchUserAction = createServerAction()
  // 2. Definimos el esquema de entrada (Zod)
  .input(
    z.object({
      query: z.string(),
    })
  )
  // 3. El handler recibe el input validado
  .handler(async ({ input }) => {
    const data = await searchUserUseCase(input.query);

    if (!data) {
      // En ZSA, si quieres devolver un error, puedes lanzar un error 
      // o usar el sistema de errores de la librería.
      throw new Error("Usuario no encontrado");
    }

    // Devolvemos la data directamente. 
    // ZSA se encarga de envolverla para el cliente.
    return data;
  });