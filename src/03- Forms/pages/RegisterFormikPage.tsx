import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { MyTextInput } from "../components/MyTextInput";
export const RegisterFormikPage = () => {
  const { formData, onChange, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = formData;

  return (
    <div>
      <h1>Register page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          name: yup
            .string()
            .min(2, "Must be at least 2 chars")
            .max(15, "Must not be greater than 15 chars")
            .required("This field is required"),
          email: yup
            .string()
            .email("Please input a valid email")
            .required("This field is required"),
          password1: yup
            .string()
            .min(6, "Must be at least 6 chars")
            .required("This field is required"),
          password2: yup
            .string()
            .oneOf([yup.ref("password1")], "Passwords mismatch")
            .required(),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput name="name" label="Name" placeholder="Ej: Ricardo" />
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Ej: example@example.com"
            />
            <MyTextInput
              name="password1"
              label="Password"
              placeholder="Ej: ********"
              type="password"
            />
            <MyTextInput
              name="password2"
              label="Confirm password"
              type="password"
              placeholder="Ej: ********"
            />
            <input type="submit" value="Create" />
            <input type="button" value="Reset" onClick={handleReset} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
