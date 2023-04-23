import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { scanSlice } from "./scanSlice";
import { storeDetailSlice } from "./storeDetailSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [scanSlice.name]: scanSlice.reducer,
      [storeDetailSlice.name]: storeDetailSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);