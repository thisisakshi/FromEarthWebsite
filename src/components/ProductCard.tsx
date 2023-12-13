import React from "react";
import { FromEarthProduct } from "../data/products";
import { useNavigate } from 'react-router-dom';

type ProductCardProps = {
  product: FromEarthProduct;
};

export function ProductCard(props: ProductCardProps) {
    const navigate = useNavigate()

  const productImageURL = process.env.PUBLIC_URL + props.product.image;
  const handleClick = (productId: number) => {
    // Replace '/new-page' with the path you want to navigate to
    navigate(`/product/${productId}`);
  };

  return (
    <div
      className="group w-fit  bg-white"
      onClick={() => handleClick(props.product.id)}
    >
      <img className="max-h-60 group-hover:opacity-75" src={productImageURL} />
      <div>
        <p className="text-l font-bold group-hover:underline">
          {props.product.name}
        </p>
        <p className="font-bold">Rs. {props.product.price}</p>
      </div>
    </div>
  );
}
