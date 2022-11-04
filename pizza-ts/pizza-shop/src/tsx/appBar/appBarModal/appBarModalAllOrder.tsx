import React from "react";
import { useAppSelector } from "../../../hook";


export function AppBarModalAllOrder() {
    const totalPrice = useAppSelector(state => state.cart.totalPrice);
    return (
        <>
            <div className="mt-20 relative h-1/3 p-5 bg-slate-50 border rounded-xl shadow-xl">
                <div className="flex items-center justify-between content-between">
                    <div>
                        summa tovarov
                    </div>
                    <div>
                        ${totalPrice}
                    </div>  
                </div>
                <div>
                    <button>
                        OFORMIT zakaz
                    </button>
                </div>
            </div>
        </>
    )
}    