"use client";

import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";

export function UpdateSearchForm() {
  const [query, setQuery] = useQueryState(
    "userId",
    parseAsString
      .withOptions({
        shallow: false,
      })
      .withDefault("")
  );

  const [inputUser, setInputUser] = useState(() => query);

  useEffect(() => {
    const inputTrimmed = inputUser.trim();

    const timer = setTimeout(() => {
      if (inputTrimmed !== query) {
        setQuery(inputTrimmed || null);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [inputUser, query, setQuery]);

  return (
    <FieldSet className="w-full">
      <FieldGroup>
        <Field>
          <Input
            type="number"
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            placeholder="Introduce el ID"
            autoComplete="off"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}