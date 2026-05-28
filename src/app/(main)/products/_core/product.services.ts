import { cacheTag } from "next/cache";
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

let peticionesReales = 0;

export const getProductsServices = async () => {
  "use cache";
  cacheTag(CACHE_TAGS.products.self);
  
  peticionesReales++;
  
  const urlSufix = `/products`;
  const apiUrl = API_BASE_URL + urlSufix;
  
  console.log(`->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->`);
  console.log(`-------------------------------- EJECUCIÓN INTERNA DE LA FUNCIÓN Nº: [ ${peticionesReales}] A LA APIURL ${apiUrl}`);
  
  const response = await callApi<ApiProductsResponse>(apiUrl, "GET");
  
  console.log(`-------------------------------- PRODUCTOS OBTENIDOS EN RESPONSE.DATA ${ response.data.products.length }`);
  const productsAdapted: ProductT[] = response.data.products.map(productAdapter);
  
  return {
    ...response,
    data: productsAdapted,
  };
};

export const getProductsCategories = async () => {
  const urlSufix = `/products/categories`;
  const apiUrl = API_BASE_URL + urlSufix;

  const response = await callApi<ApiProductCategoriesT[]>(apiUrl, "GET");
  return {
    ...response,
    data: response.data,
  };
};

export const getProductsCategoriesCached = cache(getProductsCategories, {
  tags: [CACHE_TAGS.products.product.files],
});