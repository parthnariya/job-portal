import { createSlice } from "@reduxjs/toolkit";
import { JobSliceStateType } from "./types";
import { getJobListAsyncThunk } from "./jobportalApi";

const initialState: JobSliceStateType = {
  jobs: [],
  isLoading: false,
  error: undefined,
};

const jobportalSlice = createSlice({
  name: "jobportalSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobListAsyncThunk.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(getJobListAsyncThunk.fulfilled, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.error = undefined;

      /* Append Data to existing list for infinite scroll */
      const newList = [...state.jobs, ...payload];
      state.jobs = newList;
    });
    builder.addCase(getJobListAsyncThunk.rejected, (state, action) => {
      const { error } = action;
      state.isLoading = false;
      state.error = error.message || "Something went wrong";
    });
  },
});

const jobportalReducer = jobportalSlice.reducer;
export default jobportalReducer;
