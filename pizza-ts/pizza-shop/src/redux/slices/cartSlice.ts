import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IcardPizza } from '../../components/cardPizza/cardPizzaInterface/cardPizzaInterface';
import { calcCountAllPizza } from '../../logic/calcCountAllPizza';
import { calcTotalPrice } from '../../logic/calcTotalPrice';


export interface CartState {
  pizzaList: Array<IcardPizza>;
  totalPrice: string;
  allCountPizza: number;
}

const initialState: CartState = {
  pizzaList: [],
  totalPrice: "0",
  allCountPizza: 0,
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
          if (flagUniq === false) {
            state.pizzaList.push(action.payload);
            state.pizzaList[state.pizzaList.length -1].count = 1;
          } else {
            for (let i = 0; i < state.pizzaList.length; i++) {
              if (state.pizzaList[i].id === action.payload.id) {
                let tempCount:number = 1 
                tempCount = state.pizzaList[i].count ?? 1 as number
                tempCount += 1
                state.pizzaList[i].count = tempCount                         
            }            
          }
        }
      }
      state.allCountPizza = calcCountAllPizza(state.pizzaList)
      state.totalPrice = calcTotalPrice(state.pizzaList)
    },
    minusItem(state, action: PayloadAction<IcardPizza>) {
      for (let i = 0; i < state.pizzaList.length; i++) {
        if (state.pizzaList[i].id === action.payload.id) {
          let tempCount:number = 1; 
          tempCount = state.pizzaList[i].count ?? 1 as number;
          tempCount -= 1;
          state.pizzaList[i].count = tempCount; 
          tempCount === 0
            ? state.pizzaList = state.pizzaList.filter((obj) => obj.id !== action.payload.id)
            : state.pizzaList[i].count = tempCount                        
        };
      };
      state.allCountPizza = calcCountAllPizza(state.pizzaList);
      state.totalPrice = calcTotalPrice(state.pizzaList);
    },  
    removeItem(state, action: PayloadAction<IcardPizza>) {
      state.pizzaList = state.pizzaList.filter(obj => obj.id !== action.payload.id);
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