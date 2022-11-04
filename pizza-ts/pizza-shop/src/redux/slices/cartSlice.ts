import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IListPizza } from '../../components/cardPizza/cardPizzaInterface/cardPizzaInterface';
import { calcCountAllPizza } from '../../logic/calcCountAllPizza';
import { calcTotalPrice } from '../../logic/calcTotalPrice';
import { calcRemovePizza } from '../../logic/calcRemove';



export interface CartState {
  pizzaList: Array<IListPizza>;
  totalPrice: string;
  allCountPizza: number;
}

const initialState: CartState = {
  pizzaList: [],
  totalPrice: "0.00",
  allCountPizza: 0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IListPizza>) {
      let tempUniq = false;
        if (state.pizzaList.length === 0) {
          state.pizzaList.push(action.payload)
        }else{
           for (let i = 0; i < state.pizzaList.length; i++) {
            if (state.pizzaList[i].id === action.payload.id){
              state.pizzaList[i].count += 1;
              tempUniq= true;
            }
          }
          if (tempUniq === false) {
            state.pizzaList.push(action.payload)
          }
        } 
      state.allCountPizza = calcCountAllPizza(state.pizzaList)
      state.totalPrice = calcTotalPrice(state.pizzaList)
    },
    minusItem(state, action: PayloadAction<IListPizza>) {
      for (let i = 0; i < state.pizzaList.length; i++) {
        if (state.pizzaList[i].id === action.payload.id) {
          let tempCount:number = 1; 
          tempCount = state.pizzaList[i].count ?? 1 as number;
          tempCount -= 1;
          state.pizzaList[i].count = tempCount; 
          if (tempCount === 0) {
            state.pizzaList = calcRemovePizza(state.pizzaList, action.payload.id)
          } else {
            state.pizzaList[i].count = tempCount
          }                       
        };
      };
      state.allCountPizza = calcCountAllPizza(state.pizzaList);
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },  
    removeItem(state, action: PayloadAction<IListPizza>) {
      state.pizzaList = calcRemovePizza(state.pizzaList, action.payload.id)
      state.allCountPizza = calcCountAllPizza(state.pizzaList);
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },
    clearItems(state) {
      state.pizzaList = [];
      state.totalPrice = "0";
      state.allCountPizza = 0;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;