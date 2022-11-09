import {
  IcardPizza,
  IListPizza,
} from "../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import axios from "axios";

//КАРТИНКУ ТОЖЕ С БД
const pepperoniImg = require("../../../src/images/cardPizza/pepperoni_fresh.png");
const fourCheeseImg = require("../../../src/images/cardPizza/four_cheese.png");
const chickenСlubImg = require("../../../src/images/cardPizza/chicken_club.png");
const fieryBqqImg = require("../../../src/images/cardPizza/fiery_bqq.png");


// const testReq = async () => {
//   const response = await axios.get("http://localhost:8000/api/pizza/");
//   // let result: IcardPizza[] = response.data;
//   let dPizza: IListPizza[] = [];
//   Promise.resolve(response.data.then((items: IcardPizza) => {
//     let tempVar = {
//       id: items.id,
//       name: items.name,
//       imgPizza: items.imgPizza,
//       description: items.description,
//       price: items.price,
//       count: 1,
//       size: "md",
//     };
//     // return tempVar
//     dPizza.push(tempVar);
//   }));
//   return dPizza;
// };


// export const requestCardPizza = testReq();


// const requestCardPizzaInput: IcardPizza[] = [
//   {
//     id: 0,
//     imgPizza: pepperoniImg,
//     name: "Pepperoni Fresh",
//     description:
//       "Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese",
//     price: 11.8,
//   },
//   {
//     id: 1,
//     imgPizza: fourCheeseImg,
//     name: "4 Cheese",
//     description:
//       "Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese",
//     price: 10.8,
//   },
//   {
//     id: 2,
//     imgPizza: chickenСlubImg,
//     name: "Chicken Club",
//     description: "Bacon, red onions, mozzarella, extra chicken, creamy sauce",
//     price: 11,
//   },
//   {
//     id: 3,
//     imgPizza: fieryBqqImg,
//     name: "Fiery BBQ",
//     description:
//       "Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers",
//     price: 10.8,
//   },
//   {
//     id: 4,
//     imgPizza: pepperoniImg,
//     name: "Pepperoni Fresh",
//     description:
//       "Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese",
//     price: 11.8,
//   },
//   {
//     id: 5,
//     imgPizza: fourCheeseImg,
//     name: "4 Cheese",
//     description:
//       "Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese",
//     price: 10.8,
//   },
//   {
//     id: 6,
//     imgPizza: chickenСlubImg,
//     name: "Chicken Club",
//     description: "Bacon, red onions, mozzarella, extra chicken, creamy sauce",
//     price: 11,
//   },
//   {
//     id: 7,
//     imgPizza: fieryBqqImg,
//     name: "Fiery BBQ",
//     description:
//       "Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers",
//     price: 10.8,
//   },
//   {
//     id: 8,
//     imgPizza: pepperoniImg,
//     name: "Pepperoni Fresh",
//     description:
//       "Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese",
//     price: 11.8,
//   },
//   {
//     id: 9,
//     imgPizza: fourCheeseImg,
//     name: "4 Cheese",
//     description:
//       "Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese",
//     price: 10.8,
//   },
//   {
//     id: 10,
//     imgPizza: chickenСlubImg,
//     name: "Chicken Club",
//     description: "Bacon, red onions, mozzarella, extra chicken, creamy sauce",
//     price: 11,
//   },
//   {
//     id: 11,
//     imgPizza: fieryBqqImg,
//     name: "Fiery BBQ",
//     description:
//       "Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers",
//     price: 10.8,
//   },
// ];

// export const requestCardPizza: IListPizza[] = requestCardPizzaInput.map(
//   (items) => {
//     let tempVar = {
//       id: items.id,
//       name: items.name,
//       imgPizza: items.imgPizza,
//       description: items.description,
//       price: items.price,
//       count: 1,
//       size: "md",
//     };
//     return tempVar;
//   }
// );
