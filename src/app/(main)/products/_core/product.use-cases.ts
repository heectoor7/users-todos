import {
  getProductsCached,
  getProductsCategoriesCached,
} from "./product.services";

type GetProductsProps = {
  query?: string;
  category?: string;
  page: number;
  itemsPerPage: number;
};

export const getProductsUseCase = async ({
  query,
  category,
  page,
  itemsPerPage,
}: GetProductsProps) => {
  const products = await getProductsCached();

  let filtered = products.data;

  // FILTRO POR TEXTO
  if (query) {
    filtered = filtered.filter((p) =>
      p.titulo.toLowerCase().includes(query.toLowerCase()),
    );
  }

  // FILTRO POR CATEGORÍA
  if (category) {
    filtered = filtered.filter((p) => p.categoria === category);
  }

  // TOTAL
  const total = filtered.length;

  // PAGINACIÓN
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return {
    data: paginated,
    total,
  };
};

export const getProductsCategoriesUseCase = async () => {
  const response = await getProductsCategoriesCached();

  return response;
};
