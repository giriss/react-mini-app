import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};

export const updateEmployee = (id, updatedValues) => dispatch => {
  dispatch(actions.updateEmployee({ id, updatedValues }));
};

export const deleteEmployee = employee => dispatch => {
  dispatch(actions.deleteEmployee(employee.id));
};
