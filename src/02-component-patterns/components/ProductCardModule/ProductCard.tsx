import styles from "../../styles/styles.module.css";

import { createContext, ReactElement, useContext, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import {
  ProductContextProps,
  ProductCardProps,
} from "../../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;
export const ProductCard = ({
  product,
  children,
  className,
  style,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
      ;
    </Provider>
  );
};
