import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IListPizza } from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import { requestAPI } from "../../logic/reqestAPI";

export interface ApiState {
  pizzaPromiss: Promise<any>;
  pizzaList: IListPizza[];
  valueSearch: string;
  loading: boolean;
  error: string | null;
}

const initialStateSearch: ApiState = {
  pizzaPromiss: requestAPI().then((items) =>
    items !== "Server Error!" ? items : items
  ),
  pizzaList: [],
  valueSearch: "",
  loading: false,
  error: null,
};

export const searchSlice = createSlice({
  name: "pizzaApi",
  initialState: initialStateSearch,
  reducers: {
    getValue(state, action: PayloadAction<string>) {
      state.valueSearch = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getValue } = searchSlice.actions;

export default searchSlice.reducer;
