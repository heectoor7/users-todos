"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function ProductsPagination({ totalPages }: { totalPages: number }) {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
      history: "push",
    }),
  );

  return (
    <Pagination className="p-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
            className={
              page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
          >
            <ChevronLeftIcon className="size-4" />
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <span className="text-sm px-4">
            Página <strong>{page}</strong> de {totalPages}
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) setPage(page + 1);
            }}
            className={
              page >= totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          >
            <ChevronRightIcon className="size-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
