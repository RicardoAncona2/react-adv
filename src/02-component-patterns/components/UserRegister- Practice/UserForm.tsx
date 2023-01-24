import { createContext, ReactElement } from "react";
interface userRegisterProps {
  children: ReactElement | ReactElement[];
  formId: string;
}
export const someUserContext = createContext({} as { someUserData: string });
export const UserForm = ({ children, formId }: userRegisterProps) => {
  const { Provider } = someUserContext;
  const userData = { someUserData: "asdas" };
  return (
    <Provider value={userData}>
      <h1>User Register</h1> <form id={formId}>{children}</form>
    </Provider>
  );
};
