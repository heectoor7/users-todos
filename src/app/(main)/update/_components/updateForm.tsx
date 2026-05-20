"use client";

import { FormInput } from "@/app/_shared/form/user-form-input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type UserProps = {
  id?: string;
  nombre?: string;
  username?: string;
  email?: string;
  telefono?: string;
  website?: string;
  direccion?: {
    calle?: string;
    casa?: string;
    ciudad?: string;
    codPostal?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  empresa?: {
    nombreEmpresa?: string;
    catchPhrase?: string;
    bs?: string;
  };
};

export function UpdateForm(userData: UserProps) {
  return (
    <FieldSet className="w-full">
      <Card className="flex bg-primary/20 border border-gray-400 gap-0 my-5">
        <CardHeader>
          <CardContent>
            <p className="font-semibold">General</p>
            <FieldGroup className="grid grid-cols-2 p-4 gap-4">
              <div className="space-y-4">
                <FormInput
                  label="Nombre"
                  name="name"
                  placeholder="Nombre"
                  defaultValue={userData.nombre}
                />
                <FormInput
                  label="Username"
                  name="username"
                  placeholder="Username"
                  defaultValue={userData.username}
                />
              </div>
              <div className="space-y-4">
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Email"
                  defaultValue={userData.email}
                />

                <FormInput
                  label="Teléfono"
                  name="telefono"
                  placeholder="Teléfono"
                  defaultValue={userData.telefono}
                />
              </div>
            </FieldGroup>
            <Separator className="bg-gray-300 my-2" />
            <p className="font-semibold">Otros datos</p>
            <FieldGroup className="grid grid-cols-2 p-4 gap-4">
              <div className="space-y-4">
                <FormInput
                  label="Calle"
                  name="direccion.calle"
                  placeholder="Calle"
                  defaultValue={userData.direccion?.calle}
                />
                <FormInput
                  label="Website"
                  name="website"
                  placeholder="Website"
                  defaultValue={userData.website}
                />
              </div>
              <div className="space-y-4">
                <FormInput
                  label="Número de casa"
                  name="direccion.casa"
                  placeholder="Número de casa"
                  defaultValue={userData.direccion?.casa}
                />

                <FormInput
                  label="Nombre de la empresa"
                  name="empresa.nombreEmpresa"
                  placeholder="Nombre de la empresa"
                  defaultValue={userData.empresa?.nombreEmpresa}
                />
              </div>
            </FieldGroup>
            <Separator className="bg-gray-300 my-2" />
          </CardContent>
        </CardHeader>
      </Card>
    </FieldSet>
  );
}
