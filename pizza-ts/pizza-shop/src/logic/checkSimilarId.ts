import { IcardPizza } from '../components/cardPizza/cardPizzaInterface/cardPizzaInterface';



export const checkSimilarId = (items:Array<IcardPizza>, id:number) => {
  let flagUnque = false
  // let uniqueId: number[] = []
  for (let i = 0; i < items.length; i++) {
    items[i].id === id ? flagUnque = true : flagUnque = false
  }
  // items.forEach(element => {
  //   uniqueId.push(element.id)
  // });
  // uniqueId = Array.from(new Set(uniqueId))
  // for (let i = 0; i < uniqueId.length; i++) {
  //   // console.log(uniqueId[index])
  //   uniqueId[i] === id ? flagUnque = true : flagUnque = false
  // }
  // console.log(uniqueId)
  return flagUnque
};