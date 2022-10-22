import React from "react";
import {MdSearch, MdOutlineShoppingCart} from "react-icons/md";

function AppFindAndBuy() {
    return (
        <div className="font-serif flex place-items-center space-x-5">
            <button>
                <MdSearch/> 
            </button>
            <button>
                <MdOutlineShoppingCart/> 
            </button>
        </div>
    )
}

export default AppFindAndBuy;