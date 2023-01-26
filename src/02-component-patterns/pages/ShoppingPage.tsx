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
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className={"bg-dark"}
            key={product.id}
            onChange={(event) => onProductCountChange(event)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className={"custom-image"} />
            <ProductTitle title={product.title} className={"text-white"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className={"bg-dark text-white"}
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className={"custom-image"} />
            <ProductButtons
              className={"custom-buttons"}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
