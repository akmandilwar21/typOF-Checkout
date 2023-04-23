import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface ScanState {
  page_type: string;
  common_id: string;
  index_id: string;
  category_id: string;
  store_id:string;
  common_data:any;
}

const initialState: ScanState = {
  page_type: "index",
  common_id: "",
  index_id: "",
  category_id: "",
  store_id:'',
  common_data:[]
};

export const scanSlice = createSlice({
  name: "scan",
  initialState,
  reducers: {
    setPageTypeState(state, action) {
      state.page_type = action.payload;
    },
    setCommonIdState(state, action) {
      state.common_id = action.payload;
    },
    setIndexIdState(state, action) {
        state.index_id = action.payload;
    },
    setCategoryIdState(state, action) {
        state.category_id = action.payload;
    },
    setStoreId(state,action){
      state.store_id=action.payload
    },
    setCommonData(state,action){
      state.common_data=action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.scan,
      };
    },
  },
});

export const { setPageTypeState, setCommonIdState, setIndexIdState, setCategoryIdState,setStoreId,setCommonData } = scanSlice.actions;

export const selectScan = (state: AppState) => state.scan;

export default scanSlice.reducer;