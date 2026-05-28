// src/app/(main)/products/page.tsx
import { Suspense } from "react";
import { ProductsContent } from "./_components/ProductsPageContent";

type Props = {
  searchParams: Promise<any>;
};

export default async function ProductsPage({ searchParams }: Props) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando Gestor de Productos...</div>}>
      {/* Pasamos la promesa DIRECTAMENTE sin hacerle un await aquí */}
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}