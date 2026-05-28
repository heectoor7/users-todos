"use client";

import { createContext, useContext, useState } from "react";

type CartSheetContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartSheetContext = createContext<CartSheetContextType | null>(null);

export function CartSheetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <CartSheetContext.Provider
      value={{ open, setOpen, openCart, closeCart }}
    >
      {children}
    </CartSheetContext.Provider>
  );
}

export function useCartSheet() {
  const ctx = useContext(CartSheetContext);
  if (!ctx) throw new Error("useCartSheet must be used inside provider");
  return ctx;
}