import { useCallback, useContext } from "react";
import styles from "../../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
export interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
  //TO DO maxCount
  const { increaseBy, counter, initialValues } = useContext(ProductContext);
  let { maxCount, count } = initialValues;
  //TO DO isMaxReached = useCallBack, [count,maxCount]
  //true === maxCount else  False
  const buttonStyles = styles.buttonAdd;
  const isMaxReached = useCallback(() => {
    console.log(counter, maxCount);
    return counter >= maxCount;
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : "asd"
        }`}
        onClick={() => increaseBy(1)}

      >
        +
      </button>
    </div>
  );
};
