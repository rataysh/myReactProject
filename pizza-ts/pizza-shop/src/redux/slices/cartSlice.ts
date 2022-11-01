import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IcardPizza } from '../../components/cardPizza/cardPizzaInterface/cardPizzaInterface';
import { calcTotalPrice } from '../../logic/calcTotalPrice';


export interface IcardPizzaCart extends IcardPizza {
  count: number;
}


export interface CartState {
  pizzaList: Array<IcardPizzaCart>;
  totalPrice: number;
}

const initialState: CartState = {
  pizzaList: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IcardPizzaCart>) {
      const findItem = state.pizzaList.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        state.pizzaList.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.pizzaList.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.pizzaList = state.pizzaList.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    clearItems(state) {
      state.pizzaList = [];
      state.totalPrice = 0;
    },

  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;