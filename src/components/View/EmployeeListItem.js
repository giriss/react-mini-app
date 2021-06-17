import React, { useCallback } from "react";
import * as Icon from "react-feather";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Button from "../styled/Button";
import { deleteEmployee } from "../../redux/employees/actionCreators";

const EmployeeListItem = ({ employee }) => {
  const dispatch = useDispatch();
  const { id, firstName, surname, email, age, jobTitle, status } = employee;
  const history = useHistory();
  const removeEmployee = useCallback(
    emp => {
      dispatch(deleteEmployee(emp));
    },
    [dispatch]
  );

  return (
    <tr>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{age}</td>
      <td>{jobTitle}</td>
      <td>{status}</td>
      <td>
        <Button marginRight="sm" data-cy="editButton" onClick={() => history.push(`/view/${id}`)}>
          <Icon.Edit size={16} />
        </Button>
        <Button data-cy="deleteButton" onClick={() => removeEmployee(employee)}>
          <Icon.Trash2 size={16} />
        </Button>
      </td>
    </tr>
  );
};

export default EmployeeListItem;
