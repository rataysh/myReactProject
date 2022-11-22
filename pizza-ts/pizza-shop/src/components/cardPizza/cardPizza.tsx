/** @format */

import React, {useState} from "react";
import {IListPizza} from "./cardPizzaInterface/cardPizzaInterface";
import {ModalPizza} from "../modalPizza/modalPizza";

interface TemplateCardPizza {
    templateCardPizza: IListPizza;
}

export const CardPizza: React.FC<TemplateCardPizza> = (props) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className='md:grid cardPizza'>
                <div
                    onClick={() => setActive(true)}
                    className='flex justify-center w-1/3 md:w-full'>
                    <img
                        className='cardPizzaImage'
                        src={props.templateCardPizza.imgPizza}
                        alt={props.templateCardPizza.title}
                    />
                </div>
                <div className='w-2/3 md:w-full flex flex-col'>
                    <div
                        onClick={() => setActive(true)}
                        className='grid grid-row-2'>
                        <span className='mx-1 text-lg font-bold font-sans'>
                            {props.templateCardPizza.title}
                        </span>
                        <span className='mx-1 mb-1 text-xs'>
                            {props.templateCardPizza.description}
                        </span>
                    </div>
                    <div className='mt-5 mx-2 flex flex-row items-center place-content-between'>
                        {props.templateCardPizza.price} $
                        <button
                            onClick={() => setActive(true)}
                            className='button-orange active:bg-orange-100 transition-all duration-200'>
                            <span>Select</span>
                        </button>
                    </div>
                </div>
            </div>
            <ModalPizza
                active={active}
                setActive={setActive}
                templateModalPizza={props.templateCardPizza}
            />
        </>
    );
};
