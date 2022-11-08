import React, { useState } from "react";
import { AppBarModalBuy } from "./appBarModal/appBarModalBuy";
import { useAppSelector } from "../../hook";

export const AppBarBuy:React.FC = () => {
  const [active, setActive] = useState(false);

  const cartPrice = useAppSelector((state) => state.cart.totalPrice);
  const cartCount = useAppSelector((state) => state.cart.allCountPizza);

  return (
    <div className="flex items-center">
      <button
        className="ml-3 button-orange px-2 rounded-xl flex items-center justify-between"
        onClick={() => setActive(true)}
      >
        <span className="pr-2 border-r">$ {cartPrice}</span>
        <div className="pl-2 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span>{cartCount}</span>
        </div>
      </button>
      <AppBarModalBuy active={active} setActive={setActive} />
    </div>
  );
}
