import { ProductDialog } from "../../_components/product-dialog";
import { getCart } from "../cart.actions";
import { CartItem } from "./cart.item";

export async function CartList() {
  const products = await getCart();

  return (
    <div className="flex flex-col gap-6">
      {products.map((product) => (
        // <CartItem key={product.id} product={product} cart={products} />
        <ProductDialog
          key={product.id}
          product={product}
          cart={products}
          showCart={false}
        />
      ))}
    </div>
  );
}
