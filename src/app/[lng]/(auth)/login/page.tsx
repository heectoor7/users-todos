import LoginForm from "../../../components/loginForm";

export default function Page() {
  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Tareas - Login</h1>

      <LoginForm />
    </main>
  );
}
