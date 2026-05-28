import Link from "next/link";
import Image from "next/image";
import { CartList } from "./cart.list";
import { getCart } from "../cart.actions";

export async function CartContent() {
  const products = await getCart(); // ✅ dentro de Suspense

  if (products.length === 0) {
    return (
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
        <Link href="/products" className="text-base text-blue-900 font-medium hover:underline">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Carrito de compra</h1>
      <CartList />
    </>
  );
}