"use server";

import { revalidatePath } from "next/cache";
import { ProductT } from "../_core/product.definitions";
import { prisma } from "@/lib/prisma";

// Añadir producto al carrito
export async function addToCart(product: ProductT) {
  try {
    await prisma.cartItem.upsert({
      where: { id: product.id },
      update: {
        quantity: { increment: 1 },
      },
      create: {
        id: product.id,
        titulo: product.titulo,
        descripcion: product.descripcion,
        precio: product.precio,
        imagen: product.imagen,
        quantity: 1,
      },
    });

    revalidatePath("/products");

    return {
      success: true,
      message: "Producto añadido al carrito",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Error al añadir el producto",
    };
  }
}

// Obtener todos los productos
export async function getCart() {
  return await prisma.cartItem.findMany();
}

// Vaciar carrito
export async function clearCart() {
  await prisma.cartItem.deleteMany();
  revalidatePath("/");
}

// Elminar producto
export async function removeFromCart(productId: string) {
  try {
    const item = await prisma.cartItem.findUnique({
      where: { id: productId },
    });

    if (!item) return;

    if (item.quantity > 1) {
      await prisma.cartItem.update({
        where: { id: productId },
        data: {
          quantity: { decrement: 1 },
        },
      });
    } else {
      await prisma.cartItem.delete({
        where: { id: productId },
      });
    }
    
    revalidatePath("/products");

    return {
      success: true,
      message: "Producto eliminado",
    };
  } catch {
    return {
      success: false,
      message: "Error al eliminar",
    };
  }
}
