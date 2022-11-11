/** @format */

import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {IListPizza} from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import {requestCardPizza} from "../../API/offlinePizza/offlineRequest";

export interface ApiState {
    pizzaList: IListPizza[];
    valueSearch: string;
    // loading: boolean;
    // error: string | null;
}

const initialStateSearch: ApiState = {
    pizzaList: requestCardPizza,
    valueSearch: "",
    // loading: false,
    // error: null,
};

export const searchSlice = createSlice({
    name: "pizzaApi",
    initialState: initialStateSearch,
    reducers: {
        searchPizza(state, action: PayloadAction<IListPizza[]>) {
            if (state.valueSearch === "") {
                state.pizzaList = requestCardPizza;
            } else {
                state.pizzaList = state.pizzaList.filter(({title}) =>
                    title
                        .toLocaleLowerCase()
                        .includes(state.valueSearch.toLocaleLowerCase())
                );
            }
        },
        getValue(state, action: PayloadAction<string>) {
            state.valueSearch = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {searchPizza, getValue} = searchSlice.actions;

export default searchSlice.reducer;
