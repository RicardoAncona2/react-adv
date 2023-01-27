import { useState, useEffect, useRef } from "react";
import {
  Product,
  onChangeArgs,
  ProductCardInitialValues,
} from "../interfaces/interfaces";
export interface UseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: ProductCardInitialValues;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(() => Math.min(newValue, initialValues.maxCount));
    console.log("counter",counter,initialValues.maxCount)
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    isMounted.current = true;
    if (!isMounted.current) return;

    //setCounter(value);
  }, [value]);
  const reset = () => {
    setCounter(initialValues?.count || value);
  };
  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues.maxCount,
    reset,
  };
};
