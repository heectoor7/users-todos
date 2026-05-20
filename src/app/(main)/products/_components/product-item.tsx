import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ProductT } from "../_core/product.definitions";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductDialog } from "./product-dialog";
import { getCart } from "../cart/cart.actions";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export async function ProductItem({ product }: { product: ProductT }) {
  const cart = await getCart();

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Card className="flex bg-primary/20 border border-gray-300 max-w-md gap-0 my-5 hover:transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle>{product.titulo}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src={product.imagen}
                alt={product.titulo}
                width={250}
                height={250}
              />
              <div>{product.descripcion}</div>
            </CardContent>
            <CardFooter className="flex justify-between border-0">
              <div>
                <p className="font-semibold">{product.precio}€</p>
              </div>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="border-0">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <ProductDialog product={product} cart={cart} />
        </DialogContent>
      </Dialog>
    </>
  );
}
