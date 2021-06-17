import * as yup from "yup";

const formValidationSchema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .trim()
      .max(255, "The maximum number of characters is 255")
      .required("Required"),
    surname: yup
      .string()
      .trim()
      .max(255, "The maximum number of characters is 255")
      .required("Required"),
    email: yup
      .string()
      .trim()
      .max(255, "The maximum number of characters is 255")
      .email("Invalid email address")
      .required("Required"),
    age: yup
      .number()
      .integer("Must be an integer")
      .min(18, "Must be an adult")
      .required("Required"),
    status: yup
      .string()
      .trim()
      .required("Required"),
    jobTitle: yup
      .string()
      .trim()
      .max(255, "The maximum number of characters is 255")
      .required("Required"),
  })
  .strict(true);

export default formValidationSchema;
