import React from "react";
import AppBarBuy from "./appBarBuy";
import AppBarFind from "./appBarFind";


export default function AppFindAndBuy() {
    return (
        <div className="font-serif flex place-items-center space-x-5">
            <AppBarFind/> 
            <AppBarBuy/>
        </div>
    )
}
