import { configureStore } from "@reduxjs/toolkit";
import ProposalsSlice from "./slice/proposal-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      proposals: ProposalsSlice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
