import { z } from "zod";

export const CacheTagSchema = z.enum([
  //STOCK
  // "stock-items",
  // "item-info",
  //RECEPTION_MAIN
  // "reception-items",
  // "reception-summary-items",
  //RECEPTION_REQUESTS
  // "reception-requests-items",
  // "reception-requests-summary-items",
  //PICKING
  // "picking-routes",
  // "picking-orders",
  // "picking-order",
  // "picking-summary-items",
  //PACKING
  // "packing-routes",
  // "packing-orders",
  // "packing-order",
  // "packing-packages",
  // "packing-summary-items",
  // WORKO PRODUCTS
  "worko-products",
  "worko-product",
]);
export type CacheTagT = z.infer<typeof CacheTagSchema>;

export const CACHE_TAGS = {
  TOKEN: "token",
  // location: {
  //   countries: "countries",
  //   states: "states",
  // },
  products: {
    self: "products",
    images: "product-images",
    product: {
      self: "product",
      files: "product-files",
    }, 
    // worko: {
    //   filters: "worko-product-filters",
    //   sizes: "worko-product-sizes",
    //   products: "worko-products",
    //   product: "worko-product",
    // },
    // forli: {
    //   filters: "forli-product-filters",
    //   products: "forli-products",
    //   product: "forli-product",
    // },
    // cart: {
    //   products: "cart-products",
    //   costData: "cart-cost-data",
    // },
  },
  // customers: {
  //   self: "customers",
  //   customer: {
  //     cartCostData: "customer-cart-cost-data",
  //     self: "customer",
  //     documents: {
  //       self: "customer-documents",
  //       document: "customer-document",
  //       documentPath: "customer-document-path",
  //     },
  //     addresses: {
  //       self: "customer-addresses",
  //       address: "customer-address",
  //     },
  //     taxAddreses: {
  //       self: "customer-taxAddresses",
  //       taxAddress: "customer-taxAddress",
  //     },
  //     contacts: {
  //       self: "customer-contacts",
  //       contact: "customer-contact",
  //     },
  //   },
  // },
} as const;
export const FULL_CACHE_TAG = "*";
