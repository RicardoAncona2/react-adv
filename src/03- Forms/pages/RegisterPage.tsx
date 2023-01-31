import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const { formData, onChange, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = formData;

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          className={`${!isValidEmail(email) && "has-error"}`}
          onChange={onChange}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}
        <br />
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
         {password1.trim().length <= 8 && <span>Este campo es necesario</span>}
        <br />
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          onChange={onChange}
          value={password2}
        />
         {password2===password1 && <span>Este campo es necesario</span>}
        <br />
        <input type="submit" value="Create" />
        <input type="button" value="Reset" onClick={resetForm} />
      </form>
    </div>
  );
};
