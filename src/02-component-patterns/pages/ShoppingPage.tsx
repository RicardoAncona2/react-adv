import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/ProductCardModule/index";
import { UserForm } from "../components/UserRegister- Practice/UserForm";
import { CustomInput } from "../components/UserRegister- Practice/CustomInput";
import "../styles/custom-styles.css";
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
          {/*<ProductCard.Title title="Hola mundoo" />*/}
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product} className={"bg-dark"}>
          <ProductImage className={"custom-image"} />
          <ProductTitle title="hola mundo123" className={"text-white"} />
          <ProductButtons className={"custom-buttons"} />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: "#70d1f8",boxShadow:"10px 10px 10px rgba(0,0,0,0.2)" }}>
          <ProductImage style={{ borderRadius: "500px" }} />
          <ProductTitle title="hola mundo123" style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
      <br />
      {/*<UserForm formId="Form-test-1">
        <CustomInput type="text" name="Name"></CustomInput>
        <CustomInput type="text" name="LastName"></CustomInput>
        <CustomInput type="password" name="Password"></CustomInput>
        <CustomInput
          type="submit"
          name="submit"
          withLabel={false}
        ></CustomInput>
  </UserForm>*/}
    </div>
  );
};
