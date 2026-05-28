import { getCart } from "../cart/cart.actions";
import { ProductSheetContent } from "./product-sheet-content";


export async function ProductSheet() {
  const cart = await getCart();
  return <ProductSheetContent products={cart} />;
}
