// import { handleResponseError } from '@/lib/errors';
import { cache } from "@/lib/cache";
import {
  ApiProductCategoriesT,
  ApiProductT,
  productAdapter,
  ProductT,
} from "./product.definitions";

import { callApi } from "@/lib/call-api";
import { CACHE_TAGS } from "@/config/cache-tags.config";

const API_BASE_URL = process.env.API_URL_DUMMYJSON;
type ApiProductsResponse = {
  products: ApiProductT[];
  total: number;
  skip: number;
  limit: number;
};

export const getProductsServices = async () => {
  const urlSufix = `/products`;
  const apiUrl = API_BASE_URL + urlSufix;
  console.log({ apiUrl });

  const response = await callApi<ApiProductsResponse>(apiUrl, "GET");

  console.log(response.data);
  const productsAdapted: ProductT[] =
    response.data.products.map(productAdapter);

  return {
    ...response,
    data: productsAdapted,
  };
};

export const getProductsCached = cache(getProductsServices, {
  tags: [CACHE_TAGS.products.product.self],
});

export const getProductsCategories = async () => {
  const urlSufix = `/products/categories`;
  const apiUrl = API_BASE_URL + urlSufix;

  // Tipamos la respuesta con el esquema del array
  const response = await callApi<ApiProductCategoriesT[]>(apiUrl, "GET");
  return {
    ...response,
    data: response.data,
  };
};

export const getProductsCategoriesCached = cache(getProductsCategories, {
  tags: [CACHE_TAGS.products.product.files],
});
