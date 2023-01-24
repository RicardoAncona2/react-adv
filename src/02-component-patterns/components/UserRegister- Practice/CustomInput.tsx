import { ReactElement, useContext, useEffect } from "react";
import { someUserContext } from "./UserForm";

interface CustomInputProps {
  name: string;
  type: "text" | "file" | "password" | "submit";
  //children?: ReactElement | ReactElement[];
  value?: string;
  withLabel?: boolean;
}
export const CustomInput = ({
  name,
  type,
  value,
  withLabel = true,
}: CustomInputProps) => {
  const { someUserData } = useContext(someUserContext);

  return (
    <>
      {withLabel && <label htmlFor={name}>{name} : </label>}

      <input type={type} name={name} />
    </>
  );
};
