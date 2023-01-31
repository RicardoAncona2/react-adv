import * as yup from "yup";
import "../styles/styles.css";
import { useFormik } from "formik";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: { firstName: "", lastName: "", email: "" },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, "max 15 chars ").required(),
      lastName: yup.string().max(15, "max 15 chars ").required(),
      email: yup.string().email("not a valid email").required(),
    }),
  });

  return (
    <div>
      <h1>Formik Yup </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">E-mail address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
