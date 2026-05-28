import { Suspense } from "react";
import { headers } from "next/headers";

export default function Page() {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
      
      <Suspense fallback={<p>Cargando información de usuario...</p>}>
        <UserWelcome />
      </Suspense>
    </main>
  );
}

async function UserWelcome() {
  const h = await headers();
  const isLoggedIn = h.get("x-is-logged-in") === "true";
  const username = h.get("x-username");

  if (!isLoggedIn) return null;

  return (
    <p>Bienvenido <b>{username}</b></p>
  );
}