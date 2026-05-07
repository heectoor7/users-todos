"use client";

import { login } from "@/app/(auth)/auth.actions";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <form action={formAction}>
      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        className="border p-2 rounded w-full text-black mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        className="border p-2 rounded w-full text-black mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPending ? "Cargando..." : "Iniciar sesión"}
      </button>
      {state?.error && <p className="text-red-500 mt-2">{state.error}</p>}
    </form>
  );
}
