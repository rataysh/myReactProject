import React from "react";
import { IcardPizza } from "../../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import { AppBarModalAllOrder } from "./appBarModalAllOrder";


interface IModalBuy {
    active: boolean,
    setActive: (arg: boolean) => void,
}


export function AppBarModalBuy(props: IModalBuy) {
    return (
        props.active ? 
            <>
                <div onClick={() => props.setActive(false)} className={"appBarModalView"}>
                    <div onClick={e => e.stopPropagation()} className="appBarModalViewContent overflow-auto">
                        {/* {addPizzaToOrder.map(templateModalPizza => <ModalPizza 
                        templateModalPizza={templateModalPizza} 
                        key={templateModalPizza.id}  />)} */}
                        <AppBarModalAllOrder/>
                        {/* {eachPizzaCountMultPrice} */}
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
