import { IListPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';


export const calcRemovePizza = (pizzaList: IListPizza[], actionId: number ) => {
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id === actionId){
          pizzaList[i].count = 1; 
        }        
      }
    pizzaList = pizzaList.filter((obj) => obj.id !== actionId);
    return pizzaList
}