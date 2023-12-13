import { ProductTags, products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function Bestsellers() {

  const bestsellers = products.filter(product => product.tags.includes(ProductTags.BESTSELLER))
  return (
    <div>
      <p className="text-xl font-serif font-semibold tracking-wider my-10 flex items-center justify-center">
        BESTSELLERS
      </p>
      <div className="flex items-center justify-center">
        <div className="w-5/6 lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {bestsellers.slice(0,4).map((item) => {
            if (item.tags.includes(ProductTags.BESTSELLER)) {
              return <ProductCard product={item} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
