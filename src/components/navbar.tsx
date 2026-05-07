import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "@/app/(auth)/auth.actions";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function Navbar() {
  const session = await getSession();
  const { isLoggedIn } = session;

  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Gestor de Tareas</h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link href="/todos" className="hover:underline">
                Tareas
              </Link>

              <Link href="/users" className="hover:underline">
                Usuarios
              </Link>
            </>
          ) : (
            <>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-gray-400">
                    Tareas
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-white border border-red-800 mt-2 max-w-30">
                  <p>Inicia sesión para ver esta página</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <span className="text-gray-400">
                    Usuarios
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-white border border-red-800 mt-2 max-w-30">
                  <p>Inicia sesión para ver esta página</p>
                </TooltipContent>
              </Tooltip>
            </>
          )}
          {!session.isLoggedIn && (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}
          {session.isLoggedIn && <LogoutForm />}
        </div>
      </div>
    </nav>
  );
}
