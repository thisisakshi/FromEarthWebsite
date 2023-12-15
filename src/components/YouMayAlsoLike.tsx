import { ProductTags, products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function YouMayAlsoLike() {
  const uniqueNumbers: Set<number> = new Set();

  while (uniqueNumbers.size < 4) {
    uniqueNumbers.add(Math.floor(Math.random() * products.length) + 1);
  }

  const randomIndices = Array.from(uniqueNumbers);

  return (
    <div>
      <p className="text-xl font-serif font-semibold tracking-wider my-10 flex items-center justify-center">
        YOU MAY ALSO LIKE
      </p>
      <div className="flex items-center justify-center">
        <div className="w-5/6 lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {randomIndices.map((index) => {
            return <ProductCard product={products[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}
