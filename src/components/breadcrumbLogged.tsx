"use client";

import Link from "next/link";
import LogoutForm from "./logoutForm";
import { TbChevronDown, TbPointFilled, TbShoppingCart } from "react-icons/tb";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { useCartSheet } from "@/app/(main)/products/cart/context/CartContext";

export default function BreadCrumbLogged() {
  const { openCart } = useCartSheet();

  return (
    <>
      <BreadcrumbSeparator>
        <TbPointFilled />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/todos">Tareas</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <TbPointFilled />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-1 cursor-pointer">
              Usuarios
              <TbChevronDown className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-white">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/users" className="cursor-pointer">
                  Lista de usuarios
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/info" className="cursor-pointer">
                  Buscar un usuario
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/update">Actualizar un usuario</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <TbPointFilled />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link href="/products">Productos</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <TbPointFilled />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Button onClick={openCart} className="cursor-pointer"><TbShoppingCart className="size-6" /></Button>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <TbPointFilled />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <LogoutForm />
      </BreadcrumbItem>
    </>
  );
}
