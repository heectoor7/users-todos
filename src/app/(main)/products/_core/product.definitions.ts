import { z } from "zod";

export const ApiProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  thumbnail: z.string(),
  quantity: z.number(),
  category: z.string()
});
export type ApiProductT = z.infer<typeof ApiProductSchema>;

export const ProductSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  descripcion: z.string(),
  precio: z.number(),
  imagen: z.string(),
  quantity: z.number(),
  categoria: z.string(),
});
export type ProductT = z.infer<typeof ProductSchema>;

export const productAdapter = (api: ApiProductT): ProductT => ({
  id: api.id.toString(),
  titulo: api.title.toUpperCase(),
  descripcion: api.description.toUpperCase(),
  precio: api.price,
  imagen: api.thumbnail,
  quantity: api.quantity,
  categoria: api.category,
});

export const ApiProductCategoriesSchema =z.object({
    slug: z.string(),
    name: z.string(),
    url: z.string(),
  })

export type ApiProductCategoriesT = z.infer<typeof ApiProductCategoriesSchema>;

export const ProductCategoriesSchema = z.object({
    slug: z.string(),
    name: z.string(),
    url: z.string(),
  })

export type ProductCategoriesT = z.infer<typeof ProductCategoriesSchema>;
