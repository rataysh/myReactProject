// import { useAppDispatch, useAppSelector } from "../hook";
// import React from "react";
import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";


export const transforICardToIList = (pizzaListAfterFiltred: IListPizza[], ) => {
  console.log(
      pizzaListAfterFiltred.map((items) => {
          let _ = {
            id: items.id,
            title: items.title,
            imgPizza: items.imgPizza,
            description: items.description,
            price: items.price,
            count: 1,
            size: "md",
          };
          return _;
        })
      ); 
    
    
};