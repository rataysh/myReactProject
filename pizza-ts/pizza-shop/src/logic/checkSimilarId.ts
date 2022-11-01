import { IcardPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';



export const checkSimilarId = (items:Array<IcardPizza>, id:number) => {
  let uniqueId: number[] = []
  items.forEach(element => {
    uniqueId.push(element.id)
  });
  return Array.from(new Set(uniqueId));
    // return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  };