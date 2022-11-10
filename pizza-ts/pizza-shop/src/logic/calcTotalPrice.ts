import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";

export const calcTotalPrice = (pizzaList: IListPizza[]) => {
  let tempTotalPrice: number = 0;
  let additionSize: number = 0;
  for (let i = 0; i < pizzaList.length; i++) {
    if (pizzaList[i].size === "md") {
      additionSize = 2;
    } else {
      if (pizzaList[i].size === "lg") {
        additionSize = 4;
      }
    }
    tempTotalPrice +=
      (pizzaList[i].price + additionSize) * (pizzaList[i].count ?? 1);
  }
  return tempTotalPrice.toFixed(2);
};
