import {
  DEFAULT_SEARCH_PARAMS_OPTIONS,
  PARAMS,
  SearchParamsOptionsT,
} from "@/config/params.config";
import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { PAGINATION } from "./pagination.config";

export const paginationSearchParams = (options?: SearchParamsOptionsT) => {
  const newOptions = { ...DEFAULT_SEARCH_PARAMS_OPTIONS, ...options };
  return {
    [PARAMS.pagination.page]: parseAsInteger
      .withDefault(PAGINATION.defaultPageIndex)
      .withOptions(newOptions),
    [PARAMS.pagination.pageSize]: parseAsInteger
      .withDefault(PAGINATION.defaultPageSize)
      .withOptions(newOptions),
  };
};

export const paginationSearchParamsCache = createSearchParamsCache(
  paginationSearchParams(),
);
export const paginationSerialize = createSerializer(paginationSearchParams());
