"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateUserForm } from "./user-form-create";

export function CreateUserFormDialog() {
  return (
    <Dialog>
      <DialogTrigger className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        Añadir Usuario
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle>Crear Usuario</DialogTitle>
          <DialogDescription>
            Introduce los detalles para registrar un nuevo usuario en el
            sistema.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <CreateUserForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
