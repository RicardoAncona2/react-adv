import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";
export interface UseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);
  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      return onChange({ count: value, product });
    }
    console.log("isControlled", isControlled.current);
    const newValue = Math.max(counter + value, 0);
    setCounter((prev) => newValue);

    onChange && onChange({ count: newValue, product });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);
  return { counter, increaseBy };
};
