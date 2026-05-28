import { Suspense } from "react";
import { CartContent } from "./_components/CartContent";

export default function PaginaCarrito() { // ✅ quita async
  return (
    <div className="p-8">
      <Suspense fallback={<p>Cargando carrito...</p>}>
        <CartContent />
      </Suspense>
    </div>
  );
}