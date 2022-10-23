import { IcardPizza } from '../cardPizzaInterface/cardPizzaInterface';

//КАРТИНКУ ТОЖЕ С БД
const pepperoniImg = require("../../images/pepperoni_fresh.png");
const fourCheeseImg = require("../../images/four_cheese.png");
const chickenСlubImg = require("../../images/chicken_club.png");
const fieryBqqImg = require("../../images/fiery_bqq.png");


export const requestCardPizza: IcardPizza[] = [
    { 
        id: 0,
        imgPizza: pepperoniImg,
        title: 'Pepperoni Fresh',
        description: 'Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese',
        price: 11.80,
    },
    { 
        id: 0,
        imgPizza: fourCheeseImg,
        title: '4 Cheese',
        description: 'Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese',
        price: 10.8,
    },
    { 
        id: 0,
        imgPizza: chickenСlubImg,
        title: 'Chicken Club',
        description: 'Bacon, red onions, mozzarella, extra chicken, creamy sauce',
        price: 11,
    },
    { 
        id: 0,
        imgPizza: fieryBqqImg,
        title: 'Fiery BBQ',
        description: 'Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers',
        price: 10.80,
    },
];