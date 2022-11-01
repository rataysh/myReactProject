import React from "react";
import { IcardPizza } from "./cardPizzaInterface/cardPizzaInterface";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addItem, removeItem, minusItem, clearItems } from "../../redux/slices/cartSlice"



interface TemplateCardPizza {
    templateCardPizza: IcardPizza
}


export function CardPizza(props: TemplateCardPizza) {

    const cartList = useAppSelector(state => state.cart.pizzaList);
    const dispatch = useAppDispatch();

    return (
        <div className="p-1 border rounded-md shadow bg-slate-50 grid content-between items-center">
            <div className="flex justify-center">
                <img className="m-1 p-0.5 w-11/12 hover:p-0 hover:rotate-3 transition-all duration-200"
                 src={props.templateCardPizza.imgPizza} alt={props.templateCardPizza.name}/>
            </div>
            <div className="grid grid-row-2">
                <div className="mx-1 text-lg font-bold font-sans">
                    {props.templateCardPizza.name}
                </div>
                <div className='mx-1 mb-1 text-xs'>
                    {props.templateCardPizza.description}
                </div>
            </div>
            <div className="mx-2 flex items-center place-content-between">
                    {props.templateCardPizza.price} $
                <button onClick={() => dispatch(addItem(props.templateCardPizza))} className="button-orange">
                    Select
                </button>
            </div>  
        </div>
    )
};
