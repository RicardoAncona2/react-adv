import { lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import {
  LazyPage1,
  LazyPage2,
  LazyPage3,
} from "../01-lazyload/components/pages";

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
}
const Lazy1 = lazy(
  () =>
    import(
      /*webpackChunkName:"LazyPage1"*/ "../01-lazyload/components/pages/LazyPage1"
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /*webpackChunkName:"LazyPage2"*/ "../01-lazyload/components/pages/LazyPage2"
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /*webpackChunkName:"LazyPage3"*/ "../01-lazyload/components/pages/LazyPage3"
    )
);
export const routes: Route[] = [
  {
    to: "/shopping",
    path: "/shopping",
    Component: ShoppingPage,
    name: "shopping", //displayed on screen value
  },
  {
    to: "/lazy2",
    path: "/lazy2",
    Component: Lazy2,
    name: "lazy2", //displayed on screen value
  },
  {
    to: "/lazy3",
    path: "/lazy3",
    Component: Lazy3,
    name: "lazy3", //displayed on screen value
  },
];
