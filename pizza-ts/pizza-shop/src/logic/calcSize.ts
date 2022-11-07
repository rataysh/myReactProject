import { IListPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';


export const calcSize = (props:IListPizza) => {
    let additionSize:number = 0;
    if (props.size === "md") {
      additionSize = 2
    }else{
        if (props.size === "lg") {additionSize = 4}
    }
    return additionSize
}