import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddFilterPayloadType, FilterSliceStateType } from "./types";

const initialState: FilterSliceStateType = {
  filterArray: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<AddFilterPayloadType>) => {
      const { filter, value } = action.payload;
      const filterIndex = state.filterArray.findIndex(
        (item) => item.type === filter
      );

      /* If filter is already present we modify that filter */
      if (filterIndex !== -1) {
        const newFilter = state.filterArray;
        newFilter[filterIndex].value = value;
        state.filterArray = newFilter;
      } else {
        const newFilter = [...state.filterArray, { type: filter, value }];
        state.filterArray = newFilter;
      }
    },
  },
});
export const { addFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;
