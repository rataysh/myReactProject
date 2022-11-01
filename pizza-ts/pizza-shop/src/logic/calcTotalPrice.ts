import { IcardPizzaCart } from "../redux/slices/cartSlice";


export const calcTotalPrice = (items: IcardPizzaCart[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  };
  