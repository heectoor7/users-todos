"use client";

import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { searchUserAction } from "../userInfo.actions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import { Loading } from "@/components/loading";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  const { execute, isPending } = useServerAction(searchUserAction, {
    onSuccess: ({ data }) => {
      console.log("Datos recibidos:", data);

      toast.success("Usuario encontrado", {
        description: `ID ${data.id} - ${data.nombre}`,
      });

      sessionStorage.setItem("searched_user", JSON.stringify(data));

      redirect("/info/user");
    },
    onError: () => {
      setQuery('')
      toast.error("Usuario no encontrado");
    },
  });

  useEffect(() => {
    if (query.trim() === "") return;

    const timer = setTimeout(() => {
      execute({ query: query });
    }, 500);

    return () => clearTimeout(timer);
  }, [query, execute]);

  return (
    <>
      <FieldSet className="w-full max-w-80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-4"
        >
          <FieldGroup>
            <Field>
              <Input
                type="number"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Introduce el ID ... (1,5,6,...)"
                autoComplete="off"
                className="border p-2 rounded w-full text-black outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isPending && (
                <Loading />
              )}
            </Field>
          </FieldGroup>
        </form>
      </FieldSet>
    </>
  );
}
