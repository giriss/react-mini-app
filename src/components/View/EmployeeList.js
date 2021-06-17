import React from "react";
import Table from "./styled/Table";
import { Box } from "../styled";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ children: employees, ...otherProps }) => {
  if (!employees || employees.length === 0) {
    return <Box {...otherProps}>No employee found</Box>;
  }

  return (
    <Table {...otherProps}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Age</th>
          <th>Job Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <EmployeeListItem employee={employee} key={employee.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeList;
