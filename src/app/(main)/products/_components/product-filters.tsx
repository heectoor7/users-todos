"use client";

import { Input } from "@/components/ui/input";
import { parseAsString, parseAsInteger, useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCategoriesT } from "../_core/product.definitions";
import { Separator } from "@/components/ui/separator";
import React from "react";

type ProductFiltersProps = {
  categories: ProductCategoriesT[];
};

export function ProductFilters({ categories }: ProductFiltersProps) {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      history: "push",
    }),
  );
  
  const [query, setQuery] = useQueryState(
    "query",
    parseAsString.withDefault("").withOptions({
      shallow: false,
      history: "push",
    }),
  );

  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  return (
    <div className="flex gap-4 mb-6 w-full max-w-2xl">
      <Input
        value={query ?? ""}
        placeholder="Buscar productos..."
        type="search"
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          setPage(1);
        }}
      />
      <Select
        value={category || "all"}
        onValueChange={(value) => {
          setCategory(value === "all" ? "" : value);
          setPage(1);
        }}
      >
        <SelectTrigger className="w-50">
          <SelectValue placeholder="Todas las categorías" />
        </SelectTrigger>

        <SelectContent className="max-h-96 overflow-y-auto bg-white">
          <SelectItem value="all">Todas</SelectItem>
          {categories.map((cat, index) => (
            <React.Fragment key={`${cat.slug}_${index}`}>
              <Separator className="bg-gray-300 my-2" />
              <SelectItem key={`${cat.slug}_${index}`} value={cat.slug}>
                {cat.name}
              </SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
