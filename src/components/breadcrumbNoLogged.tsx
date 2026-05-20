"use client";

import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BreadCrumbNoLogged() {
  return (
    <>
      <BreadcrumbItem>
        <Tooltip>
          <TooltipTrigger>
            <span className="text-gray-400">Tareas</span>
          </TooltipTrigger>
          <TooltipContent className="bg-white border border-red-800 mt-2 max-w-30">
            <p>Inicia sesión para ver esta página</p>
          </TooltipContent>
        </Tooltip>
      </BreadcrumbItem>
      <BreadcrumbSeparator></BreadcrumbSeparator>
      <BreadcrumbItem>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Usuario</span>
              <TbChevronDown className="text-gray-400 size-3.5" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white border border-red-800 mt-2 max-w-30">
            <p>Inicia sesión para ver esta página</p>
          </TooltipContent>
        </Tooltip>
      </BreadcrumbItem>
      <BreadcrumbSeparator></BreadcrumbSeparator>
      <BreadcrumbItem>
        <Tooltip>
          <TooltipTrigger>
            <span className="text-gray-400">Productos</span>
          </TooltipTrigger>
          <TooltipContent className="bg-white border border-red-800 mt-2 max-w-30">
            <p>Inicia sesión para ver esta página</p>
          </TooltipContent>
        </Tooltip>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </>
  );
}
