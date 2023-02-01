import { lazy, LazyExoticComponent } from "react";

import { RegisterPage } from "../03- Forms/pages/RegisterPage";

import {
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicForm,
} from "../03- Forms/pages/";
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
    to: "/formikYup",
    path: "/formikYup",
    Component: FormikYupPage,
    name: "formikYup", //displayed on screen value
  },
  {
    to: "/register",
    path: "/register",
    Component: RegisterPage,
    name: "register", //displayed on screen value
  },
  {
    to: "/formikBasic",
    path: "/formikBasic",
    Component: FormikBasicPage,
    name: "formikBasic", //displayed on screen value
  },
  {
    to: "/formikComponents",
    path: "/formikComponents",
    Component: FormikComponents,
    name: "formikComponents", //displayed on screen value
  },
  {
    to: "/formikAbstraction",
    path: "/formikAbstraction",
    Component: FormikAbstraction,
    name: "formikAbstraction", //displayed on screen value
  },
  {
    to: "/RegisterFormikPage",
    path: "/RegisterFormikPage",
    Component: RegisterFormikPage,
    name: "RegisterFormikPage", //displayed on screen value
  },
  {
    to: "/DynamicForm",
    path: "/DynamicForm",
    Component: DynamicForm,
    name: "DynamicForm", //displayed on screen value
  },
];
