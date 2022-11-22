/** @format */

import React from "react";

import {AppBarModalAllOrder} from "./appBarModalAllOrder";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {ModalPizza} from "./appBarModalPizza";
import {clearItems} from "../../../redux/slices/cartSlice";

const emptyCartImg = require("../../../images/eptyCart.png");

interface IModalBuy {
    active: boolean;
    setActive: (arg: boolean) => void;
}

export function AppBarModalBuy(props: IModalBuy) {
    const cartList = useAppSelector((state) => state.cart.pizzaList);
    const dispatch = useAppDispatch();

    return props.active ? (
        <>
            <div
                onClick={() => props.setActive(false)}
                className={"appBarModalView"}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='appBarModalViewContent overflow-auto'>
                    {cartList.length !== 0 ? (
                        <>
                            <div className='flex justify-end pb-2'>
                                <button onClick={() => dispatch(clearItems())}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-5 h-5'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                        />
                                    </svg>
                                </button>
                            </div>
                            {cartList.map((templateModalPizza) => (
                                <ModalPizza
                                    templateModalPizza={templateModalPizza}
                                    key={
                                        templateModalPizza.id +
                                        templateModalPizza.size
                                    }
                                />
                            ))}
                            <AppBarModalAllOrder />
                        </>
                    ) : (
                        <>
                            <div className='mt-36 flex items-center justify-center content-center'>
                                <img
                                    className='w-4/5 hover:p-0 hover:rotate-1 transition-all duration-200'
                                    src={emptyCartImg}
                                    alt={"Empty Cart"}
                                />
                            </div>
                            <span className='flex items-center justify-center'>
                                Oops, your cart is empty..
                            </span>
                        </>
                    )}
                </div>
            </div>

            <div className='appBarModalViewBg'></div>
        </>
    ) : (
        <>
            <div
                onClick={() => props.setActive(false)}
                className='appBarModalView translate-x-full'>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='appBarModalViewContent'></div>
            </div>
        </>
    );
}
