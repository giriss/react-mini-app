import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { id: uuidv4(), ...employee },
      }),
      reducer(draftState, { payload }) {
        draftState.push(payload);
      },
    },
    updateEmployee(draftState, { payload: { id, updatedValues } }) {
      const index = draftState.findIndex(e => e.id === id);
      draftState[index] = { ...updatedValues, id };
    },
    deleteEmployee: (draftState, { payload: id }) =>
      draftState.filter(employee => employee.id !== id),
  },
});

export const { saveNewEmployee, deleteEmployee, updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
