import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import loggerMiddleware from "./middlewares/logger";
import responseReducer from "./responses";

const rootReducer = combineReducers({
  responses: responseReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAPI = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: { errorMessage: string };
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
