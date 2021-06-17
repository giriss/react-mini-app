import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import employees from "./employees";
import global from "./global";
import searchTerm from "./searchTerm";

const reducer = combineReducers({
  global,
  employees,
  searchTerm,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    thunk: true,
  }),
});
export default store;
