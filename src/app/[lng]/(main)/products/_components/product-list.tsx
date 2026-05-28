import { ProductT } from "../_core/product.definitions";
import { ProductItem } from "./product-item";

export async function ProductsList({ products }: { products: ProductT[] }) {
  
  return (
    <ul>
      {products.length === 0 ? (
        <li className="p-4 text-gray-500 italic">
          No se encontraron productos.
        </li>
      ) : (
        <div className="flex w-full justify-center">
          <div className="gap-6 md:grid md:grid-cols-3">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </ul>
  );
}
