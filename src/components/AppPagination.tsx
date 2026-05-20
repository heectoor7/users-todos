"use client";
import { PAGINATION } from "@/app/_shared/pagination/pagination.config";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/components.lib";
import { parseAsInteger, useQueryStates } from "nuqs";
import { useEffect, useState, useTransition } from "react";
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { useDebouncedCallback } from "use-debounce";

interface AppPaginationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  pageCount: number;
}
export default function AppPagination({
  pageCount,
  className,
  ...props
}: AppPaginationProps) {
  const [isPending, startTransition] = useTransition();

  const queryStateOptions = {
    shallow: false,
    startTransition,
  };

  const [pagination, setPagination] = useQueryStates({
    page: parseAsInteger
      .withDefault(PAGINATION.defaultPageIndex)
      .withOptions(queryStateOptions),
    pageSize: parseAsInteger
      .withDefault(PAGINATION.defaultPageSize)
      .withOptions(queryStateOptions),
  });

  const [localPagination, setLocalPagination] = useState(pagination);

  const debouncedSetPagination = useDebouncedCallback(setPagination, 300);

  useEffect(() => {
    debouncedSetPagination(localPagination);
  }, [localPagination]);

  const { page, pageSize } = localPagination;

  //reiniciar la página al cambiar el tamaño.
  const updatePageSize = (value: number) => {
    setLocalPagination({ page: 1, pageSize: value });
  };

  const pageSizeOptions = PAGINATION.options;

  const canPreviousPage = page > 1;
  const canNextPage = page < pageCount;

  const firstPage = () =>
    setLocalPagination((pagination) => ({ ...pagination, page: 1 }));
  const lastPage = () =>
    setLocalPagination((pagination) => ({ ...pagination, page: pageCount }));
  const previousPage = () => {
    canPreviousPage &&
      setLocalPagination((pagination) => ({
        ...pagination,
        page: pagination.page - 1,
      }));
  };
  const nextPage = () => {
    canNextPage &&
      setLocalPagination((pagination) => ({
        ...pagination,
        page: pagination.page + 1,
      }));
  };
  
  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-center justify-end gap-x-2 gap-y-1 px-2",
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 lg:gap-x-6">
        {/* <div className="flex items-center gap-x-2">
          <p className="hidden text-sm font-medium lg:block">
            Registros por página
          </p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => updatePageSize(+value)}
          >
            <SelectTrigger className="border-foreground/30 hover:border-accent-primary h-fit w-fit gap-1 border-2 px-2 py-1 transition">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize || "Todo"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}
        <div className="hidden items-center justify-center gap-2 text-sm font-medium lg:flex">
          Página {page} de {pageCount}
        </div>
        <div className="flex items-center justify-center gap-1 text-sm font-medium lg:hidden">
          {page} <span>de</span> {pageCount}
        </div>
        <div className="flex items-center gap-x-2">
          {isPending && <Spinner className="size-5" />}
          <Button
            // variant={"color"}
            size={"icon"}
            onClick={() => firstPage()}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">Ir a la primera página</span>
            <RxDoubleArrowLeft className="h-4 w-4" />
          </Button>

          <Button
            // variant={"color"}
            size={"icon"}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <span className="sr-only">Ir a la página anterior</span>
            <RxChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            // variant={"color"}
            size={"icon"}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <span className="sr-only">Ir a la página siguiente</span>
            <RxChevronRight className="h-4 w-4" />
          </Button>
          <Button
            // variant={"color"}
            size={"icon"}
            onClick={() => lastPage()}
            disabled={!canNextPage}
          >
            <span className="sr-only">Ir a la última página</span>
            <RxDoubleArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

