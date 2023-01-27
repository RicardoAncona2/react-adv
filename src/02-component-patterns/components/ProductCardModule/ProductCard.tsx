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
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, initialValues }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          maxCount: 0,
          product,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
