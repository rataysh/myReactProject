import { IcardPizza } from '../cardPizzaInterface/cardPizzaInterface';

//КАРТИНКУ ТОЖЕ С БД
const pepperoniImg = require("../../../images/cardPizza/pepperoni_fresh.png");
const fourCheeseImg = require("../../../images/cardPizza/four_cheese.png");
const chickenСlubImg = require("../../../images/cardPizza/chicken_club.png");
const fieryBqqImg = require("../../../images/cardPizza/fiery_bqq.png");


export const requestCardPizza: IcardPizza[] = [
    { 
        id: 0,
        imgPizza: pepperoniImg,
        name: 'Pepperoni Fresh',
        description: 'Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese',
        price: 11.80,
    },
    { 
        id: 1,
        imgPizza: fourCheeseImg,
        name: '4 Cheese',
        description: 'Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese',
        price: 10.8,
    },
    { 
        id: 2,
        imgPizza: chickenСlubImg,
        name: 'Chicken Club',
        description: 'Bacon, red onions, mozzarella, extra chicken, creamy sauce',
        price: 11,
    },
    { 
        id: 3,
        imgPizza: fieryBqqImg,
        name: 'Fiery BBQ',
        description: 'Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers',
        price: 10.80,
    },
    { 
        id: 4,
        imgPizza: pepperoniImg,
        name: 'Pepperoni Fresh',
        description: 'Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese',
        price: 11.80,
    },
    { 
        id: 5,
        imgPizza: fourCheeseImg,
        name: '4 Cheese',
        description: 'Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese',
        price: 10.8,
    },
    { 
        id: 6,
        imgPizza: chickenСlubImg,
        name: 'Chicken Club',
        description: 'Bacon, red onions, mozzarella, extra chicken, creamy sauce',
        price: 11,
    },
    { 
        id: 7,
        imgPizza: fieryBqqImg,
        name: 'Fiery BBQ',
        description: 'Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers',
        price: 10.80,
    },
    { 
        id: 8,
        imgPizza: pepperoniImg,
        name: 'Pepperoni Fresh',
        description: 'Tikka masala sauce, chicken, yoghurt & mint sauce, chilli pepper, onion red, pepper bell, mozzarella cheese',
        price: 11.80,
    },
    { 
        id: 9,
        imgPizza: fourCheeseImg,
        name: '4 Cheese',
        description: 'Creamy sauce, cheddar, blue cheese, mozzarella cheese, hard cheese',
        price: 10.8,
    },
    { 
        id: 10,
        imgPizza: chickenСlubImg,
        name: 'Chicken Club',
        description: 'Bacon, red onions, mozzarella, extra chicken, creamy sauce',
        price: 11,
    },
    { 
        id: 11,
        imgPizza: fieryBqqImg,
        name: 'Fiery BBQ',
        description: 'Spicy beef, green peppers, pepperoni, marinara sauce, bbq sauce, mozzarella cheese, chilli peppers',
        price: 10.80,
    },
];