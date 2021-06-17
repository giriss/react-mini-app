import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (_, { payload: searchTerm }) => searchTerm,
    clearSearchTerm: () => "",
  },
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
