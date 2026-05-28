"use client";

import AppPagination from "@/components/AppPagination";

interface ProductsListPaginationProps extends React.ComponentProps<
  typeof AppPagination
> {
  pageCount: number;
}
export default function ProductsListPagination({
  pageCount,
  className,
  ...props
}: ProductsListPaginationProps) {
  return (
    <AppPagination pageCount={pageCount} className={className} {...props} />
  );
}
