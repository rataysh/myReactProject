import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";

export const calcCountAllPizza = (pizzaList: IListPizza[]) => {
  let tempCount: number = 0;
  for (let i = 0; i < pizzaList.length; i++) {
    tempCount += pizzaList[i].count ?? 0;
  }
  return tempCount;
};
