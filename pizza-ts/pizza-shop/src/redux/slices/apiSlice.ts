import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IcardPizza, IListPizza } from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";

export interface ApiState {
  pizzaList: IListPizza[];
  valueSearch: string;
  loading: boolean;
  error: string | null;
}

const initialStateSearch: ApiState = {
  pizzaList: [],
  valueSearch: "",
  loading: false,
  error: null,
};

export const fetchPizza = createAsyncThunk<
  IListPizza[],
  undefined,
  { rejectValue: string }
>("pizzaApi/fetchPizzaApi", async function (_, { rejectWithValue }) {
  const response = await fetch("http://localhost:8000/api/pizza/");
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data:IListPizza[] = await response.json();
  return data;
});

export const searchSlice = createSlice({
  name: "pizzaApi",
  initialState: initialStateSearch,
  reducers: {
    searchPizza(state, action: PayloadAction<IListPizza[]>) {
      if (state.valueSearch === "") {
        state.pizzaList = action.payload;
      }
      state.pizzaList = state.pizzaList.filter(({ title: name }) =>
        name.toLocaleLowerCase().includes(state.valueSearch.toLocaleLowerCase())
      );
    },
    getValue(state, action: PayloadAction<string>) {
      state.valueSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizzaList = action.payload;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { searchPizza, getValue } = searchSlice.actions;

export default searchSlice.reducer;
