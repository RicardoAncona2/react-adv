import formJson from "../data/custom-form.json";
import { Form, Formik } from "formik";
import { MyTextInput } from "../components/MyTextInput";
import { onChangeArgs } from "../../02-component-patterns/interfaces/interfaces";
import { MySelect } from "../components/MySelect";
import * as yup from "yup";
export interface Field {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  options?: SelectOption[];
  validations?: validation[];
}
type SelectOption = {
  id: number;
  label: string;
};
type validation = {
  type: "minLength" | "required" | "email";
  value?: number;
};
const initialValues: { [key: string]: any } = {};
const FormObjects: Field[] = formJson;
//formJson.forEach((input) => (initialValues[input.name] = input.value));
const requiredFields: { [key: string]: any } = {};
for (const input of FormObjects) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let rule = yup.string();
  for (const validation of input.validations) {
    if (validation.type === "required") {
      rule = rule.required("Este campo es requerido");
    }
    if (validation.type === "minLength") {
      rule = rule.min(
        validation.value || 2,
        `min length of ${validation.value || 2} is required`
      );
    }
    if (validation.type === "email") {
      rule = rule.email(`not a valid email address`);
    }
  }
  requiredFields[input.name] = rule;
}
const validationSchema = yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(
              ({ type, name, label, options, placeholder }: Field) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      type={type as any}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect name={name} label={label} key={name}>
                      <option value="">Select an option</option>
                      {options?.map(({ id, label }) => (
                        <option value={id} key={id}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
              }
            )}
            <input type="submit" value="Submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
