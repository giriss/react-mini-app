import React from "react";
import { Field, useFormikContext } from "formik";
import TextField from "./styled/TextField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const FormField = ({ name, placeholder, as, children, type = "text" }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <TextField
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            type={type}
            error={meta.error && meta.touched}
            as={as}
            {...field}
          >
            {children}
          </TextField>
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>{errors[name]}</ErrorMessage>
      )}
    </Box>
  );
};

export default FormField;
