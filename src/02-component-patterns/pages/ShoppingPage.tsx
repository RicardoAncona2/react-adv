import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/ProductCardModule/index";
import { UserForm } from "../components/UserRegister- Practice/UserForm";
import { CustomInput } from "../components/UserRegister- Practice/CustomInput";
export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffee mug card",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Hola mundoo" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="hola mundo123" />
          <ProductButtons />
        </ProductCard>
      </div>
      <br />
      <UserForm formId="Form-test-1">
        <CustomInput type="text" name="Name"></CustomInput>
        <CustomInput type="text" name="LastName"></CustomInput>
        <CustomInput type="password" name="Password"></CustomInput>
        <CustomInput
          type="submit"
          name="submit"
          withLabel={false}
        ></CustomInput>
      </UserForm>
    </div>
  );
};
