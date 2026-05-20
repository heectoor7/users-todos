import z from "zod";

export const PaginationOptionsSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
});
export type PaginationOptionsT = z.infer<typeof PaginationOptionsSchema>;

export const PaginatedDataSchema = PaginationOptionsSchema.extend({
  pageCount: z.number().optional(),
});
export type PaginatedDataT = z.infer<typeof PaginatedDataSchema>;
