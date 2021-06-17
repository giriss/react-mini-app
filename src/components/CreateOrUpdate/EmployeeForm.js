import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { omit } from "lodash";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import { saveNewEmployee, updateEmployee } from "../../redux/employees/actionCreators";
import formValidationSchema from "./formValidationSchema";
import { Flex } from "../styled";

const EmployeeForm = ({ employee, onSuccess }) => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    (employeeValues, onSubmitProps) => {
      if (employee) {
        dispatch(updateEmployee(employee.id, employeeValues));
      } else {
        dispatch(saveNewEmployee(employeeValues));
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }
      if (typeof onSuccess === "function") onSuccess();
    },
    [dispatch, employee, onSuccess]
  );

  const initialValues = useMemo(() => {
    if (employee) return omit(employee, "id");
    return {
      firstName: "",
      surname: "",
      email: "",
      age: "",
      status: "",
      jobTitle: "",
    };
  }, [employee]);

  return (
    <Formik
      validationSchema={formValidationSchema}
      onSubmit={submitForm}
      initialValues={initialValues}
    >
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Flex alignItems="left" direction="column" width="300px">
          <FormField name="firstName" placeholder="First name" />
          <FormField name="surname" placeholder="Surname" />
          <FormField name="email" placeholder="Email" />
          <FormField name="age" placeholder="Age" type="number" />
          <FormField name="status" as="select">
            <option disabled hidden value="">
              Select status
            </option>
            <option value="ACTIVE">Active</option>
            <option value="LEAVE_OF_ABSENCE">Leave of absence</option>
            <option value="TERMINATED">Terminated</option>
          </FormField>
          <FormField name="jobTitle" placeholder="Job title" />
          <FormButtons />
        </Flex>
      </Flex>
    </Formik>
  );
};

export default EmployeeForm;
