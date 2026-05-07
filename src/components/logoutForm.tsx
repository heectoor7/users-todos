import { logout } from "@/app/(auth)/auth.actions";

export default function LogoutForm() {
  return (
    <form action={logout}>
      <button>Cerrar sesión</button>
    </form>
  );
}
