"use client";

import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "../cart/cart.actions";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { ProductT } from "../_core/product.definitions";
import { useCartSheet } from "../cart/context/CartContext";

type ProductSheetContentProps = {
  products: ProductT[];
};

async function handleRemoveFromCart(productId: string, productTitle: string) {
  try {
    const res = await removeFromCart(productId);

    if (res?.success) {
      toast.error(res.message, {
        description: productTitle,
      });
    } else {
      toast.error(res?.message);
    }
  } catch {
    toast.error("Ha ocurrido un error");
  }
}

export function ProductSheetContent({ products }: ProductSheetContentProps) {
  const { open, setOpen } = useCartSheet();
  const total = products.reduce((acc, p) => acc + p.precio * p.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="bg-white flex flex-col h-full p-0">
        <div className="px-4 py-4 border-b bg-white">
          <div className="flex flex-col gap-1">
            <SheetTitle className="text-base font-semibold">Carrito</SheetTitle>

            <Link
              href="/products/cart"
              className="text-xs hover:text-blue-800 transition"
            >
              Ver página completa del carrito →
            </Link>
          </div>
        </div>

        <ScrollArea className="flex-1 px-2">
          <SheetHeader className="hidden" />

          {products.map((product) => (
            <Card
              key={product.id}
              className="border-none shadow-none bg-transparent"
            >
              <CardContent className="flex items-center gap-3 p-2">
                <div>
                  <Image
                    src={product.imagen}
                    alt={product.titulo}
                    width={70}
                    height={70}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col max-w-40 flex-1">
                  <span className="text-sm font-medium truncate">
                    {product.titulo}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {product.quantity} ud. × {product.precio}€
                  </span>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm font-semibold">
                    {(product.precio * product.quantity).toFixed(2)}€
                  </span>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-xs text-red-500 hover:text-red-600"
                    onClick={() =>
                      handleRemoveFromCart(product.id, product.titulo)
                    }
                  >
                    eliminar
                  </Button>
                </div>
              </CardContent>
              <Separator className="bg-gray-300 my-2" />
            </Card>
          ))}
        </ScrollArea>

        {/* FOOTER MEJORADO */}
        <div className="border-t bg-white px-4 py-4 space-y-3">
          {/* total */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>

            <span className="text-lg font-semibold">{total.toFixed(2)}€</span>
          </div>

          {/* CTA */}
          <Link
            href="/products/cart"
            className="w-full inline-flex items-center justify-center rounded-md bg-black text-white py-2 text-sm font-medium hover:bg-black/90 transition"
          >
            Ir al pago
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
