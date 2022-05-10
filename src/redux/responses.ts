import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IResponse {
  prompt: string;
  response: string;
}

const responseSlice = createSlice({
  name: "responses",
  initialState: {
    responses: [] as IResponse[],
  },
  reducers: {
    storeResponse(state, action: PayloadAction<IResponse>) {
      state.responses.unshift(action.payload);
      localStorage.setItem("@responses", JSON.stringify(state.responses));
    },
    fetchResponses(state) {
      const rawResponses = localStorage.getItem("@responses");
      const responsesInStorage = rawResponses
        ? JSON.parse(rawResponses)
        : ([] as IResponse[]);
      state.responses = responsesInStorage;
    },
    clearResponses(state) {
      state.responses = [];
      localStorage.removeItem("@responses");
    },
  },
});

export const { storeResponse, fetchResponses, clearResponses } =
  responseSlice.actions;

export default responseSlice.reducer;
