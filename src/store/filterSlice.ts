import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddFilterPayloadType,
  FilterSliceStateType,
  RemoveFilterPayloadType,
} from "./types";

const initialState: FilterSliceStateType = {
  filterArray: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    /* filter to add new filter on data */
    addFilter: (state, action: PayloadAction<AddFilterPayloadType>) => {
      const { filter, value } = action.payload;
      const filterIndex = state.filterArray.findIndex(
        (item) => item.type === filter
      );

      /* If filter is already present we modify that filter */
      if (filterIndex !== -1) {
        const newFilter = state.filterArray;
        newFilter[filterIndex].value.push(value);
        state.filterArray = newFilter;
      } else {
        const newFilter = [
          ...state.filterArray,
          { type: filter, value: [value] },
        ];
        state.filterArray = newFilter;
      }
    },
    /* filter to remove filter on data */
    removeFilter: (state, action: PayloadAction<RemoveFilterPayloadType>) => {
      const { filter, value } = action.payload;

      const filterIndex = state.filterArray.findIndex(
        (item) => item.type === filter
      );

      /* If filter is already present we modify that filter */
      if (filterIndex !== -1) {
        const newFilter = state.filterArray;
        const newFilterValue = state.filterArray[filterIndex].value.filter(
          (item) => item !== value
        );
        newFilter[filterIndex].value = newFilterValue;

        state.filterArray = newFilter.filter((item) => item.value.length > 0);
      }
    },
  },
});
export const { addFilter, removeFilter } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;
