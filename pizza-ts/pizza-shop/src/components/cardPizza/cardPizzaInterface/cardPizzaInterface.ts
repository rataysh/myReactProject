
// Тут модель запроса
export interface IcardPizza {
    id: number;
    name: string;
    imgPizza: string;
    description: string;
    price: number;
    count?: number;
}

export interface IListPizza extends IcardPizza {
    count: number;
    size: string;
}

// export interface IPizzaWithSize extends IcardPizza {
//     count: number;
//     size: string;
// }