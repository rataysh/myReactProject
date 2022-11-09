import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IListPizza } from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
// import { requestCardPizza } from "../../API/allPizzaRequest/allPizzaRequest";
import { requestCardPizzaFromApi } from "./apiSlice";

export interface SearchState {
  pizzaList: IListPizza[];
  valueSearch: string;
}

const initialState: SearchState = {
  pizzaList: requestCardPizzaFromApi,
  valueSearch: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchPizza(state, action: PayloadAction<IListPizza[]>) {
      if (state.valueSearch === "") {
        state.pizzaList = requestCardPizzaFromApi;
      }
      state.pizzaList = state.pizzaList.filter(({ name }) =>
        name.toLocaleLowerCase().includes(state.valueSearch.toLocaleLowerCase())
      );
    },
    getValue(state, action: PayloadAction<string>) {
      state.valueSearch = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchPizza, getValue } = searchSlice.actions;

export default searchSlice.reducer;
