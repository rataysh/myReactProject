import { getAllPizzaAPI } from "../API/requests";
import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import { transforICardToIList } from "./transforICardToIList";


export const requestAPI = async () => {
  const response = await fetch(getAllPizzaAPI);
  if (!response.ok) {
    return "Server Error!";
  }
  const data: IListPizza[] = await response.json();
  return transforICardToIList(data);
};
