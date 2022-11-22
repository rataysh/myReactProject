/** @format */

import React from "react";

interface IModalButtonSize {
    size: string;
    setSize: (arg: string) => void;
}

export const ModalPizzaRadioGroup: React.FC<IModalButtonSize> = (props) => {
    return (
        <div className='modalButtonGroup md:w-1/2'>
            <button
                className={
                    props.size === "sm"
                        ? "modalPizzaRadioButton bg-white rounded-xl"
                        : "modalPizzaRadioButton"
                }
                onClick={() => props.setSize("sm")}>
                <span>10"</span>
            </button>
            <button
                className={
                    props.size === "md"
                        ? "modalPizzaRadioButton bg-white rounded-xl"
                        : "modalPizzaRadioButton"
                }
                onClick={() => props.setSize("md")}>
                <span>12"</span>
            </button>
            <button
                className={
                    props.size === "lg"
                        ? "modalPizzaRadioButton bg-white rounded-xl"
                        : "modalPizzaRadioButton"
                }
                onClick={() => props.setSize("lg")}>
                <span>14"</span>
            </button>
        </div>
    );
};
