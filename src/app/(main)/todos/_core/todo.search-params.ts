import { createSearchParamsCache, parseAsString } from "nuqs/server"

export const todoSearchParams = {
  query: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
}

export const todoSearchParamsCache = createSearchParamsCache(todoSearchParams)