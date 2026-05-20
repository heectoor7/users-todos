import { getSession } from "@/app/(auth)/auth.actions";
import { redirect } from "next/navigation";
import {
  getProductsCategoriesUseCase,
  getProductsUseCase,
} from "./_core/product.use-cases";
import { ProductsList } from "./_components/product-list";
import { ProductSheet } from "./_components/product-sheet";
import { productsSearchParamsCache } from "./_core/products.search-params";
import { ProductFilters } from "./_components/product-filters";
import ProductsListPagination from "./_components/ProductsListPagination";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const params = await searchParams;
  const { page, query, category } = productsSearchParamsCache.parse(params);
  const itemsPerPage = 6;

  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/");
  }

  const { data: products, total } = await getProductsUseCase({
    query,
    category,
    page,
    itemsPerPage,
  });

  const categories = await getProductsCategoriesUseCase();
  
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <main className="flex flex-col p-8 w-full justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Gestor de Productos</h1>

      <p className="pb-4 text-gray-700">
        Número de Productos: {products.length}
      </p>

      <ProductFilters categories={categories.data} />

      <ProductSheet />
      <ProductsList products={products} />
      <ProductsListPagination
        pageCount={totalPages}
        className="bg-white sticky bottom-0 border-t z-20 py-1 backdrop-blur-sm"
      />
    </main>
  );
}