import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import responseReducer from "./responses";

const store = configureStore({
  reducer: {
    responses: responseReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type ThunkAPI = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: { errorMessage: string };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
