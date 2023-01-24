import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";
import noImage from "../../assets/no-image.jpg";
export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow = img ? img : product.img ? product.img : noImage;
  return (
    <img
      src={imgToShow}
      className={`${styles.productImg} ${className}`}
      alt="Product Image"
      style={style}
    />
  );
};
