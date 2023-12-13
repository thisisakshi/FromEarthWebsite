import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import { FromEarthProduct, ProductTags, products } from "../data/products";
import { Bestsellers } from "../components/Bestsellers";
import { Footer } from "../components/Footer";

function ProductFlair() {
  return (
    <div className="flex">
      <img className="w-20" src="/images/paraben-free.jpg" />
      <img className="w-20" src="/images/sulfate-free.jpg" />
    </div>
  );
}

export function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const product: FromEarthProduct | undefined = products.find(
    (item) => item.id.toString() === id
  );

  if (!product) {
    return <p>Something went wrong</p>;
  }

  const productImageURL = process.env.PUBLIC_URL + product.image;

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="lg:mx-80 mx-10 my-10 grid lg:grid-cols-2 sm:grid-cols-1">
        {/* image */}
        <img className="w-96 mb-4" src={productImageURL} />
        {/* details */}
        <div>
          {/* name */}
          <p className="lg:text-3xl font-bold">{product.name}</p>

          {/* price */}
          <p className="font-semibold lg:text-xl">Rs. {product.price}</p>

          {/* Variants? */}
          {product.variations && (
            <div className="flex space-x-3 mt-5">
              {product.variations.map((variation) => {
                return (
                  <p className="text-xl border-2 p-2 rounded-md border-gray-400 hover:text-gray-500">
                    {variation}
                  </p>
                );
              })}
            </div>
          )}

          {/* description */}
          <p className="my-6 lg:text-xl">{product.description}</p>

          {/* Sulphate free, paraben free icons */}
          {(product.tags.includes(ProductTags.GLYCERIN_SOAP) ||
            product.tags.includes(ProductTags.OIL_SOAP)) && <ProductFlair />}

          {/* Active ingrediants */}
          {product.activeIngrediants && (
            <p className="my-10 lg:text-xl">
              <b>Active Ingrediants: </b>
              {product.activeIngrediants}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="border-t border-gray-300 w-2/3" />
      </div>

      <Bestsellers />
      <Footer />
    </div>
  );
}