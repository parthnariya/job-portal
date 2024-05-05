import { configureStore } from "@reduxjs/toolkit";
import jobportalReducer from "./jobportalSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    jobportalReducer: jobportalReducer,
  },
});

/* type of our root state */
export type RootState = ReturnType<typeof store.getState>;

/* type of our dispatch function */
export type AppDispatch = typeof store.dispatch;

/* hooks to use dispatch and selector in application */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
