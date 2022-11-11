import { IListPizza } from "../components/cardPizza/cardPizzaInterface/cardPizzaInterface";


export const transforICardToIList = (pizzaAPI: IListPizza[], ) => {
      const result = pizzaAPI.map((items) => {
          let _ = {
            id: items.id,
            title: items.title,
            imgPizza: items.imgPizza,
            description: items.description,
            price: items.price,
            count: 1,
            size: "md",
          };
          return _;
        })
      return result    
};