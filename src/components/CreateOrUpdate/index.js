import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../styled";
import SuccessMessage from "./styled/SuccessMessage";
import EmployeeForm from "./EmployeeForm";

const CreateOrUpdate = ({ id }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const employee = useSelector(({ employees }) => (id ? employees.find(e => e.id === id) : null));
  const isUpdating = useMemo(() => !!employee, [employee]);

  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => setShowSuccess(false), 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showSuccess]);

  return (
    <>
      <Header>{isUpdating ? "Edit" : "Create new"} employee</Header>
      {showSuccess && (
        <SuccessMessage textAlign="center" marginBottom="lg">
          Employee {isUpdating ? "updated" : "added"} successfully
        </SuccessMessage>
      )}
      <EmployeeForm employee={employee} onSuccess={() => setShowSuccess(true)} />
    </>
  );
};

export default CreateOrUpdate;
