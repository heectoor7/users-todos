import { getSession } from "./(auth)/auth.actions";

export default async function Page() {
  const session = await getSession();
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas</h1>
      {session.isLoggedIn && (
        <p>Bienvenido <b>{session.username}</b></p>
      )}
    </main>
  );
}
