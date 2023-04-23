import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface StoreDetailState {
  store: any;
}

const initialState: StoreDetailState = {
  store: []
};

export const storeDetailSlice = createSlice({
  name: "store_detail",
  initialState,
  reducers: {
    setStoreDetailState(state, action) {
      state.store = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.store_detail,
      };
    },
  },
});

export const { setStoreDetailState} = storeDetailSlice.actions;

export const selectStoreDetail = (state: AppState) => state.store_detail;

export default storeDetailSlice.reducer;