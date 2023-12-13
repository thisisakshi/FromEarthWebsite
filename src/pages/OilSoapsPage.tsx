import React from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductTags, products } from "../data/products";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";

export function OilSoapsPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-center justify-center">
        <div className="w-5/6 lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 py-10">
        {products.map((item) => {
          if (item.tags.includes(ProductTags.OIL_SOAP)) {
            return <ProductCard product={item} />;
          }
        })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
