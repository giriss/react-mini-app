import React, { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createSelector } from "@reduxjs/toolkit";
import * as Icon from "react-feather";
import { Box, Button, Flex, Header } from "../styled";
import EmployeeList from "./EmployeeList";
import TextField from "../CreateOrUpdate/styled/TextField";
import { clearSearchTerm, setSearchTerm } from "../../redux/searchTerm";

const getSearchTerm = state => state.searchTerm;

const filteredEmployees = createSelector(
  [getSearchTerm, state => state.employees],
  (searchTerm, employees) => {
    if (searchTerm) {
      return employees.filter(({ firstName, surname }) =>
        `${firstName} ${surname}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return employees;
  }
);

const View = () => {
  const history = useHistory();
  const employees = useSelector(filteredEmployees);
  const searchTerm = useSelector(getSearchTerm);
  const searchRef = useRef();
  const dispatch = useDispatch();
  const showSearchBar = useMemo(() => searchTerm || (employees && employees.length > 0), [
    employees,
    searchTerm,
  ]);

  const handleChange = useCallback(() => {
    dispatch(setSearchTerm(searchRef.current.value));
  }, [searchRef, dispatch]);

  const handleClear = useCallback(() => {
    dispatch(clearSearchTerm());
  }, [dispatch]);

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex direction="column" alignItems="center" justifyContent="center" marginTop="lg">
        {showSearchBar && (
          <Flex>
            <TextField
              value={searchTerm}
              ref={searchRef}
              placeholder="Search by name"
              onChange={handleChange}
              expand={["200px", "250px"]}
            />
            <Button marginLeft="sm" onClick={handleClear}>
              <Icon.Delete size={16} />
            </Button>
          </Flex>
        )}
        <EmployeeList marginBottom="lg" marginTop={showSearchBar ? "lg" : undefined}>
          {employees}
        </EmployeeList>
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
