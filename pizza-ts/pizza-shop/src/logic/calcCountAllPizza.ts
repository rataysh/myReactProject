import { IcardPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';


export const calcCountAllPizza = (pizzaList: IcardPizza[]) => {
    let tempCount:number = 0;
    for (let i = 0; i < pizzaList.length; i++) {
        tempCount += pizzaList[i].count ?? 0 
    }
    return tempCount
}