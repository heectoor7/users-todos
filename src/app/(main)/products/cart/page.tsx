import Link from "next/link";
import { CartList } from "./_components/cart.list";
import { getCart } from "./cart.actions";
import Image from "next/image";

export default async function PaginaCarrito() {
  const products = await getCart();

  return (
    <div className="p-8">
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 pt-20">
          <h1 className="text-base text-gray-500 font-medium">
            No hay productos en el carrito
          </h1>
          <Image
            src="https://stonehouseathenry.ie/images/empty-cart.png"
            alt="carrito vacío"
            width={120}
            height={120}
            className="opacity-40"
          />
          <Link
            href="/products"
            className="text-base text-blue-900 font-medium hover:underline"
          >
            Volver
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Carrito de compra</h1>
          <CartList />
        </>
      )}
    </div>
  );
}
