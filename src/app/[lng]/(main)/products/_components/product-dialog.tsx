"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ProductT } from "../_core/product.definitions";
import { TbShoppingCart, TbMinus, TbPlus } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "../cart/cart.actions";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartSheet } from "../cart/context/CartContext";

type CartItemT = {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  quantity: number;
};

type ProductDialogProps = {
  product: ProductT;
  cart: CartItemT[];
  showCart?: boolean;
};

export function ProductDialog({
  product,
  cart,
  showCart = true,
}: ProductDialogProps) {
  const { openCart } = useCartSheet();
  const router = useRouter();

  async function handleAddToCart() {
    try {
      const res = await addToCart(product);
      router.refresh();

      if (res.success) {
        toast.success(res.message, {
          description: `ID ${product.id} - ${product.titulo}`,
          action: {
            label: "Ver carrito",
            onClick: () => {
              openCart();
            },
          },
          actionButtonStyle: {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "6px",
          },
        });
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Ha ocurrido un error");
    }
  }

  async function handleRemoveFromCart(productId: string, productTitle: string) {
    try {
      const res = await removeFromCart(productId);
      router.refresh();

      if (res?.success) {
        toast.error(res.message, {
          description: productTitle,
          action: {
            label: "Ver carrito",
            onClick: () => {
              openCart();
            },
          },
          actionButtonStyle: {
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "6px",
          },
        });
      } else {
        toast.error(res?.message);
      }
    } catch {
      toast.error("Ha ocurrido un error");
    }
  }
  const inCart = cart.some((item) => item.id === product.id);
  const quantity = cart.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <Card className="p-4 bg-white border border-gray-200 shadow-sm my-3 hover:shadow-md transition-all duration-300">
      <div className="flex flex-row items-center gap-4">
        <div className="relative shrink-0 bg-gray-100 rounded-lg p-2">
          <Image
            src={product.imagen}
            alt={product.titulo}
            width={80}
            height={80}
            className="object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col grow min-w-0">
          <h3 className="font-bold text-lg truncate text-gray-800">
            {product.titulo}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-1 mb-2">
            {product.descripcion}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl text-primary">
              {product.precio}€
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-center">
          {inCart ? (
            <>
              <Button
                variant="destructive"
                className="cursor-pointer bg-red-400 hover:bg-red-500 text-white p-2 h-10 w-10 rounded flex items-center justify-center transition-colors shadow-sm"
                onClick={() => handleRemoveFromCart(product.id, product.titulo)}
                title="Eliminar del carrito"
              >
                <TbMinus className="size-5" />
              </Button>
              <div className="flex items-center justify-center min-w-7.5 rounded border border-gray-300 py-2 px-4">
                <span className="text-lg font-semibold text-gray-800">
                  {quantity}
                </span>
              </div>
              <Button
                className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white p-2 h-10 w-10 rounded flex items-center justify-center transition-colors shadow-sm"
                onClick={handleAddToCart}
                title="Añadir uno más"
              >
                <TbPlus className="size-5" />
              </Button>
            </>
          ) : (
            <Button
              className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all shadow-sm"
              onClick={handleAddToCart}
            >
              <TbShoppingCart className="size-5" />
              <span className="hidden sm:inline">Añadir</span>
            </Button>
          )}
        </div>
      </div>
      {inCart && showCart && (
        <CardFooter>
          <div>
            <Link
              href="/products/cart"
              className="hover:text-blue-800 cursor-pointer"
            >
              Ver carrito
            </Link>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
