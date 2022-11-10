import React, { useState } from "react";
import { IListPizza } from "../cardPizza/cardPizzaInterface/cardPizzaInterface";
import { useAppDispatch } from "../../hook";
import { addItem } from "../../redux/slices/cartSlice";
import { ModalPizzaRadioGroup } from "./modalPizzaRadioGroup";

interface ITemplateModalPizza {
  templateModalPizza: IListPizza;
  active: boolean;
  setActive: (arg: boolean) => void;
}

export const ModalPizza: React.FC<ITemplateModalPizza> = (props) => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState("md");

  const calcSizeWithNoChange = (size: string) => {
    let additionSize: number = 0;
    if (size === "md") {
      additionSize = 2;
    } else {
      if (size === "lg") {
        additionSize = 4;
      }
    }
    return additionSize;
  };

  //Create a new var for change size and aply to redux
  let copyPizza: IListPizza = { ...props.templateModalPizza };

  return props.active ? (
    <>
      <div onClick={() => props.setActive(false)} className={"pizzaModalView"}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="pizzaModalViewContent overflow-auto"
        >
          <div className="flex justify-end items-end">
            <button onClick={() => props.setActive(false)}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <>
            <div className="flex place-content-center">
              <img
                className={
                  size === "sm" ? "scale-90" : size === "lg" ? "scale-110" : ""
                }
                src={props.templateModalPizza.imgPizza}
                alt={props.templateModalPizza.title}
              ></img>
            </div>
            <div className="flex items-center justify-between md:ml-3 lg:text-lg md:text-lg font-medium font-sans">
              <div className="mt-4">{props.templateModalPizza.title}</div>
            </div>
            <div className="md:ml-3 mt-2">
              {props.templateModalPizza.description}
            </div>
            <>
              <div className="flex">
                <ModalPizzaRadioGroup size={size} setSize={setSize} />
                <div className="w-1/2 mt-5 mx-2 py-1.5 button-orange rounded-xl shadow-xl flex items-center justify-center active:bg-orange-100 transition-all duration-200">
                  <button
                    onClick={() => {
                      copyPizza.size = size;
                      dispatch(addItem(copyPizza));
                      copyPizza = props.templateModalPizza;
                    }}
                  >
                    Add to basket for $
                    {props.templateModalPizza.price +
                      calcSizeWithNoChange(size)}
                  </button>
                </div>
              </div>
            </>
          </>
        </div>
      </div>
      <div className="appBarModalViewBg"></div>
    </>
  ) : (
    <>
      <div
        onClick={() => props.setActive(false)}
        className="appBarModalView translate-x-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="appBarModalViewContent"
        ></div>
      </div>
    </>
  );
};
