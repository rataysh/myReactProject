import React from "react";
import { IListPizza } from "../cardPizza/cardPizzaInterface/cardPizzaInterface";
// import { useAppDispatch } from "../../hook";
// import { removeItem } from "../../redux/slices/cartSlice"



interface ITemplateModalPizza {
    templateModalPizza: IListPizza
    active: boolean,
    setActive: (arg: boolean) => void,
}


export const ModalPizza: React.FC<ITemplateModalPizza> = ( props ) => {
    return (
        props.active ? 
        <>
            <div onClick={() => props.setActive(false)} className={"pizzaModalView"}>
                <div onClick={e => e.stopPropagation()} className="pizzaModalViewContent overflow-auto">
                    <div className="flex justify-end items-end">
                        <button onClick={() => props.setActive(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <>
                        <div className="flex place-content-center ">
                            <img src={props.templateModalPizza.imgPizza} alt={props.templateModalPizza.name}></img>
                        </div>
                        <div className="flex items-center justify-between md:ml-3 lg:text-lg md:text-lg font-medium font-sans">
                            <div className="mt-5">
                                {props.templateModalPizza.name}
                            </div>
                            <div className="mt-5">
                                ${props.templateModalPizza.price}
                            </div>
                        </div>
                        <div className="md:ml-3 mt-2">
                            {props.templateModalPizza.description}
                        </div>
                    </>
                </div>
            </div>
            <div className="appBarModalViewBg"></div>
        </>
        :    
        <>
            <div onClick={() => props.setActive(false)} className="appBarModalView translate-x-full">
                <div onClick={e => e.stopPropagation()} className="appBarModalViewContent"></div>
            </div>
        </>
)
};