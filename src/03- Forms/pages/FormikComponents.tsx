import * as yup from "yup";
import "../styles/styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components </h1>
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
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component={"span"} />
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component={"span"} />
              <label htmlFor="email">E-mail address</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component={"span"} />
              <label htmlFor="jobType">E-mail address</label>
              <Field name="jobType" as="select">
                <option value="">choose one</option>
                <option value="developer">developer</option>
                <option value="designer">designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT jr.</option>
              </Field>
              <ErrorMessage name="jobType" component={"span"} />
              <label>
                <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>

              <ErrorMessage name="terms" component={"span"} />
              <input type="submit" value="Submit" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
