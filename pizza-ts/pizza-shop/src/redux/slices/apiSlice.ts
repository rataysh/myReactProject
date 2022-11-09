import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IcardPizza,
  IListPizza,
} from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
// import axios from "axios";

type PizzaAPI = {
  pizzaList: IListPizza[];
  loading: boolean;
  error: string | null;
};
const initialState: PizzaAPI = {
  pizzaList: [],
  loading: false,
  error: null,
};

export const fetchPizza = createAsyncThunk<
  IListPizza[],
  undefined,
  { rejectValue: string }
>("pizzaAPI/fetchPizzaAPI", async function (_, { rejectWithValue }) {
  const response = await fetch("http://localhost:8000/admin/api/pizza");
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();
  return data;
});

export const pizzaApiSlice = createSlice({
  name: "pizzaAPI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPizza.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchPizza.fulfilled, (state, action) => {
        state.pizzaList = action.payload;
        state.loading = false;
    })
    // .addCase()
  },
});

// const testReq = async () => {
//   const response = await axios.get("http://localhost:8000/api/pizza/");
//   // let result: IcardPizza[] = response.data;
//   let dPizza: IListPizza[] = [];
//   Promise.resolve(
//     response.data.then((items: IcardPizza) => {
//       let tempVar = {
//         id: items.id,
//         name: items.name,
//         imgPizza: items.imgPizza,
//         description: items.description,
//         price: items.price,
//         count: 1,
//         size: "md",
//       };
//       // return tempVar
//       dPizza.push(tempVar);
//     })
//   );
//   return dPizza;
// };

// export const requestCardPizzaFromApi = testReq();
