import * as yup from "yup";
import "../styles/styles.css";
import { Formik, Form } from "formik";
import { MyTextInput, MyCheckbox, MySelect } from "../components/index";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          firstName: yup.string().max(15, "max 15 chars ").required(),
          lastName: yup.string().max(15, "max 15 chars ").required(),
          email: yup.string().email("not a valid email").required(),
          terms: yup.boolean().isTrue("must accept terms and conditions"),
          jobType: yup
            .string()
            .required()
            .notOneOf(["it-jr"], "ITJunior is not allowed"),
        })}
      >
        {() => {
          return (
            <Form>
              <MyTextInput
                name="firstName"
                label="First name"
                placeholder="Ej: Ricardo"
              />
              <MyTextInput
                name="lastName"
                label="Last name"
                placeholder="Ej: Ancona"
              />
              <MyTextInput
                name="email"
                label="Email"
                type="email"
                placeholder="Ej: rancona190@gmail.com"
              />

              <MySelect name={"job Type"} label={"jobType"}>
                <option value="">choose one</option>
                <option value="developer">developer</option>
                <option value="designer">designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT jr.</option>
              </MySelect>
              <MyCheckbox name="terms" label="Terms & contditions" />
              <input type="submit" value="Submit" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
