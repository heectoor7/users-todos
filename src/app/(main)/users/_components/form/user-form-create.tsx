"use client";

import { createUserAction } from "../../users.actions";

import {
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";

import { useActionState, useState } from "react";
import { FormInput } from "../form/user-form-input";
import { FormSection } from "../form/user-form-section";

export function CreateUserForm() {
  const [openPanel, setOpenPanel] = useState<
    "details" | "address" | "company" | null
  >("details");

  const [state, formCreateAction, isPending] = useActionState(
    createUserAction,
    null,
  );

  return (
    <FieldSet className="w-full">
      <form action={formCreateAction}>
        <FieldGroup>
          
          <FormSection title="Product details" id="details" currentOpen={openPanel} setOpen={setOpenPanel}>
            <FormInput label="Nombre" name="name" placeholder="Nombre" />
            <FormInput label="Nombre de Usuario" name="username" placeholder="Nombre de Usuario" />
            <FormInput label="Email" name="email" type="email" placeholder="Email" />
            <FormInput label="Teléfono" name="phone" type="tel" placeholder="Teléfono" />
            <FormInput label="Página Web" name="website" placeholder="Web" />
          </FormSection>

          <FormSection title="Datos de la dirección" id="address" currentOpen={openPanel} setOpen={setOpenPanel}>
            <FormInput label="Calle" name="street" placeholder="Calle" />
            <FormInput label="Número de casa" name="suite" placeholder="Número de casa" />
            <FormInput label="Ciudad" name="city" placeholder="Ciudad" />
          </FormSection>

          <FormSection title="Datos de la empresa" id="company" currentOpen={openPanel} setOpen={setOpenPanel}>
            <FormInput label="Nombre de la empresa" name="companyName" placeholder="Nombre de la empresa" />
            <FormInput label="catchPhrase" name="catchPhrase" placeholder="catchPhrase" />
            <FormInput label="bs" name="bs" placeholder="bs" />
          </FormSection>

          <div className="py-6">
            <Button type="submit" disabled={isPending} className="bg-blue-500 hover:bg-blue-700 text-white">
              {isPending ? "Creando..." : "Crear Usuario"}
            </Button>
          </div>
          
        </FieldGroup>
      </form>
    </FieldSet>
  );
}
