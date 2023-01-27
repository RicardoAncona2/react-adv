import { ReactElement } from "react";
import { Props as TitleProps } from "../components/ProductCardModule/ProductTitle";
import { Props as ImageProps } from "../components/ProductCardModule/ProductImage";
import { Props as ButtonProps } from "../components/ProductCardModule/ProductButtons";
export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  initialValues: ProductCardInitialValues;
}
export interface ProductButtonProps {
  increaseBy: (value: number) => void;
  counter: number;
}
export interface ProductCardProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCartHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: ProductCardInitialValues;
}
export interface ProductCardInitialValues {
  count: number;
  maxCount: number;
}
export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: TitleProps) => JSX.Element;
  Image: ({ img }: ImageProps) => JSX.Element;
  Buttons: ({ className }: ButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}
export interface ProductInCart extends Product {
  count: number;
}
export interface ProductCartHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
