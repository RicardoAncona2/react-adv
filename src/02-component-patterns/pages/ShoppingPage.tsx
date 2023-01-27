import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/ProductCardModule/index";

import "../styles/custom-styles.css";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { useState } from "react";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const product = products[0];
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <ProductCard
        product={product}
        className={"bg-dark"}
        key={product.id}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage className={"custom-image"} />
            <ProductTitle title={product.title} className={"text-white"} />
            <ProductButtons className={"custom-buttons"} />
            <button onClick={reset}>reset</button>
            <button
              onClick={() => increaseBy(-2)}
              style={{ display: count === 0 ? "none" : "block" }}
            >
              -2
            </button>
            <h5 className="text-white">{count}</h5>
            <button
              onClick={() => increaseBy(2)}
              style={{ display: isMaxCountReached ? "none" : "block" }}
            >
              2
            </button>
          </>
        )}
      </ProductCard>
    </div>
  );
};
