import { parseAsBoolean, parseAsString } from "nuqs/server";

import {
  createSearchParamsCache,
  parseAsInteger,
} from "nuqs/server";

export const productsSearchParams = {
  page: parseAsInteger.withDefault(1),
  query: parseAsString.withDefault(""),
  category: parseAsString.withDefault(""),
  available: parseAsBoolean.withDefault(false),
};

export const productsSearchParamsCache =
  createSearchParamsCache(productsSearchParams);