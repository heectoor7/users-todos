"use client";

import { CartSheetProvider } from "@/app/(main)/products/cart/context/CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartSheetProvider>
      {children}
    </CartSheetProvider>
  );
}