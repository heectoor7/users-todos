import { TransitionStartFunction } from "react";

export type SearchParamsOptionsT = {
  history?: "push" | "replace";
  scroll?: boolean;
  shallow?: boolean;
  throttleMs?: number;
  startTransition?: TransitionStartFunction;
  // startTransition?: (callback: () => void | {} | Promise<void | {}>) => void
  clearOnDefault?: boolean;
};

export const DEFAULT_SEARCH_PARAMS_OPTIONS = {
  shallow: false,
};

export const PARAMS = {
  messages: {
    self: "messages",
    success: "successMessage",
    info: "infoMessage",
    warning: "warningMessage",
    error: "errorMessage",
  },
  pagination: {
    page: "page",
    pageSize: "pageSize",
  },
  sort: {
    self: "sort",
  },
  grouped: {
    self: "grouped",
  },
  date: {
    self: "date",
    initialDate: "initialDate",
    endDate: "endDate",
  },
  filters: {
    query: "query",
    countryId: "countryId",
    combobox: "combobox",
  },
  products: {
    self: "products",
    product: {
      self: "product",
      color: "productColor",
    },
  },
  worko: {
    products: {
      filters: {
        query: "query",
        family: "family",
        type1: "type1",
        type2: "type2",
        type3: "type3",
        colorList: "colorList",
        sizeList: "sizeList",
        searchType: "searchType",
      },
    },
  },
  forli: {
    products: {
      filters: {
        query: "query",
        typeList: "typeList",
        colorList: "colorList",
        sizeList: "sizeList",
        featureList: "featureList",
        professionList: "professionList",
        toecapList: "toecapList",
        insoleList: "insoleList",
        searchType: "searchType",
      },
    },
  },
  commercial: {
    customers: {
      filters: {
        query: "query",
      },
    },
    documents: {
      filters: {
        initialDate: "initialDate",
        endDate: "endDate",
        customerId: "customerId",
        docType: "docType",
      },
    },
  },
} as const;

export const LIST_SEPARATOR = ",";