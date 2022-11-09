import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  IcardPizza,
  IListPizza,
} from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import axios from "axios";
// import { requestCardPizza } from "../../API/allPizzaRequest/allPizzaRequest";



const testReq = async () => {
  const response = await axios.get("http://localhost:8000/api/pizza/");
  // let result: IcardPizza[] = response.data;
  let dPizza: IListPizza[] = [];
  Promise.resolve(
    response.data.then((items: IcardPizza) => {
      let tempVar = {
        id: items.id,
        name: items.name,
        imgPizza: items.imgPizza,
        description: items.description,
        price: items.price,
        count: 1,
        size: "md",
      };
      // return tempVar
      dPizza.push(tempVar);
    })
  );
  return dPizza;
};

export const requestCardPizza = testReq();
