import React from "react";
import { useAppSelector } from "../../../hook";

export function AppBarModalAllOrder() {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const totalCountPizza = useAppSelector((state) => state.cart.allCountPizza);
  return (
    <>
      <div className="mt-20 relative grid items-center content-between h-1/4 p-5 bg-slate-50 border rounded-xl shadow-xl">
        <div className="flex items-center justify-between content-between border-b pb-5">
          <div className=" lg:text-lg md:text-lg lg:font-medium md:font-medium font-sans">
            {totalCountPizza} Pizza
          </div>
          <div>${totalPrice}</div>
        </div>
        <div>
          <button className="w-full button-orange px-2 rounded-xl flex items-center justify-center active:bg-orange-100 transition-all duration-200">
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
