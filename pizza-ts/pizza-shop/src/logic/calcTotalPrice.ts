import { IcardPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';


export const calcTotalPrice = (pizzaList: IcardPizza[]) => {
    let tempTotalPrice:number = 0;
    for (let i = 0; i < pizzaList.length; i++) {
        tempTotalPrice += pizzaList[i].price*(pizzaList[i].count ?? 1)
    }
    return tempTotalPrice.toFixed(2)
}