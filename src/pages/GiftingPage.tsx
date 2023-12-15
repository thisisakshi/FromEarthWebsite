import React from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductTags, products } from "../data/products";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { getInquiryWhatsAppLink } from "../data/helpers";

function CustomGifts() {
  return (
    <div className="flex items-center justify-center px-5">
      <div className="text-center w-fit lg:w-3/4">
        <p className="text-bold text-2xl">We make custom gifts!</p>
        <p className="text-xl mt-3">
          All of our gifts at From Earth are lovingly designed, packed and
          wrapped, giving you unique and fragrant ways to help you celebrate any
          occasion. We think giving the perfect gift is one of the most
          beautiful ways you can honor someone’s special day – and we can help
          you with that! <br />
          <br />
          Order minimum of 10 gifts required. Minimum amount for each gift is
          Rs.800. Please contact{" "}
          <a className="text-green-600" href={getInquiryWhatsAppLink("custom gifting")}>
            +91 8095944338 on Whatsapp
          </a>{' '}
          for inquiries.
        </p>
        <div className="flex gap-4 mt-10 justify-center items-center">
          <img
            className="mb-4 mt-4 h-64 w-64"
            src="/images/custom_gift_1.jpg"
          />
          <img className="mb-4 mt-4 h-64" src="/images/custom_gift_2.jpg" />
          <img className="mb-4 mt-4 h-64" src="/images/custom_gift_3.jpg" />
        </div>
      </div>
    </div>
  );
}

export function GiftingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex items-center justify-center">
        <div className="w-5/6 lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 py-10">
          {products.map((item) => {
            if (item.tags.includes(ProductTags.GIFT)) {
              return <ProductCard product={item} />;
            }
          })}
        </div>
      </div>
      {/* Divider */}
      <div className="flex items-center justify-center mb-5">
        <div className="border-t border-gray-300 w-2/3" />
      </div>
      <CustomGifts />
      <Footer />
    </div>
  );
}
