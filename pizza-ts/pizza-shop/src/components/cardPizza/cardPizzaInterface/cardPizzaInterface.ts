// Тут модель запроса
export interface IcardPizza {
  id: number;
  title: string;
  imgPizza: string;
  description: string;
  price: number;
  count?: number;
}

export interface IListPizza extends IcardPizza {
  count: number;
  size: string;
}
