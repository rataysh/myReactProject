import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IcardPizza } from '../../components/cardPizza/cardPizzaInterface/cardPizzaInterface';
import { checkSimilarId } from '../../logic/checkSimilarId';
// import { calcTotalPrice } from '../../logic/calcTotalPrice';



export interface CartState {
  pizzaList: Array<IcardPizza>;
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
    addItem(state, action: PayloadAction<IcardPizza>) {
      if (state.pizzaList.length === 0) {
        state.pizzaList.push(action.payload);
        state.pizzaList[0].count = 1;
      } else {
          let flagUniq:boolean = false
          for (let i = 0; i < state.pizzaList.length; i++) {
            if (state.pizzaList[i].id === action.payload.id) {
              flagUniq = true; 
            }
          }
          flagUniq ? console.log("Элемент уже есть") : state.pizzaList.push(action.payload);
        }
          // console.log(checkSimilarId(state.pizzaList, action.payload.id));
          // checkSimilarId(state.pizzaList, action.payload.id)
            // ? console.log("Элемент уже есть")
            // : state.pizzaList.push(action.payload) 

      // console.log(state.pizzaList);
      
      // const findItem = state.pizzaList.find((obj) => obj.id === action.payload.id);
      // if (findItem) {
      //   findItem.count += 1;
      // } else {
      //   state.pizzaList.push({
      //     ...action.payload,
      //     count: 1,
      //   });
      // }
      // state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.pizzaList.find((obj) => obj.id === action.payload);
      // if (findItem) {
      //   findItem.count -= 1;
      // }
      // state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.pizzaList = state.pizzaList.filter((obj) => obj.id !== action.payload);
      // state.totalPrice = calcTotalPrice(state.pizzaList);
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