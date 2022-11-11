// import { getAllPizzaAPI } from "../API/requests";
import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import { transforICardToIList } from "./transforICardToIList";

export const requestAllPizzaAPI = async (API: string) => {
  const response = await fetch(API);
  if (!response.ok) {
    return ("Server Error!");
  }
  const data: IListPizza[] = await response.json();
  const result = transforICardToIList(data);
  return result;
};
