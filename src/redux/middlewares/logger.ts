import { Middleware } from "@reduxjs/toolkit";
import { fetchResponses } from "../responses";
import { RootState } from "../store";

const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);
      if (action.type === fetchResponses().type) console.log("yes");
      next(action);
    };
  };
};

export default loggerMiddleware;
