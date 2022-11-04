import React from "react";

import { AppBarModalAllOrder } from "./appBarModalAllOrder";
import { useAppSelector } from "../../../hook";
import { ModalPizza } from "./appBarModalPizza";


const emptyCartImg = require("../../../images/eptyCart.png");

interface IModalBuy {
    active: boolean,
    setActive: (arg: boolean) => void,
}

export function AppBarModalBuy(props: IModalBuy) {
    const cartList = useAppSelector(state => state.cart.pizzaList);

    return (
        props.active ? 
            <>
                <div onClick={() => props.setActive(false)} className={"appBarModalView"}>
                    <div onClick={e => e.stopPropagation()} className="appBarModalViewContent overflow-auto">
                        {cartList.length !== 0
                            ?  <>
                                    {cartList.map(templateModalPizza => <ModalPizza 
                                    templateModalPizza={templateModalPizza} 
                                    key={templateModalPizza.id}  />)}
                                    <AppBarModalAllOrder/>
                                </>
                            :   <div className="mt-40 flex items-center justify-center content-center">
                                    <img className="w-4/5 hover:p-0 hover:rotate-1 transition-all duration-200"
                                    src={emptyCartImg} alt={"Empty Cart"}/>
                                </div> 
                        }
                        
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
}
