import { z } from "zod";

export const ApiUsersSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: z.object({
    street: z.string(),
    suite: z.string(),
    city: z.string(),
    zipcode: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});
export type ApiUsersT = z.infer<typeof ApiUsersSchema>;

export const UsersSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  username: z.string(),
  email: z.string(),
  direccion: z.object({
    calle: z.string(),
    casa: z.string(),
    ciudad: z.string(),
    codPostal: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
  }),
  telefono: z.string(),
  website: z.string(),
  empresa: z.object({
    nombreEmpresa: z.string(),
    eslogan: z.string(),
    bs: z.string(),
  }),
});
export type UsersT = z.infer<typeof UsersSchema>;

export const usersAdapter = (api: ApiUsersT): UsersT => ({
  id: api.id.toString(),
  nombre: api.name || "Sin nombre",
  username: api.username || "",
  email: api.email || "",
  direccion: {
    calle: api.address?.street || "No especificada",
    casa: api.address?.suite || "",
    ciudad: api.address?.city || "",
    codPostal: api.address?.zipcode || "",
    geo: {
      lat: api.address?.geo?.lat || "0",
      lng: api.address?.geo?.lng || "0",
    },
  },
  telefono: api.phone || "",
  website: api.website || "",
  empresa: {
    nombreEmpresa: api.company?.name || "N/A",
    eslogan: api.company?.catchPhrase || "",
    bs: api.company?.bs || "",
  },
});
