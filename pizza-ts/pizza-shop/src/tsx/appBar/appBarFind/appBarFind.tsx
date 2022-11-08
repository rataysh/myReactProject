import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hook";
import { getValue, searchPizza } from "../../../redux/slices/searchSlice";

export const AppBarFind: React.FC = () => {
  const dispatch = useAppDispatch();
  const pizzaListSearh = useAppSelector((state) => state.search.pizzaList);
  const [value, setValue] = useState<string>("")

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getValue(event.target.value));
    setValue(event.target.value);
    // dispatch(searchPizza(pizzaListSearh));
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      dispatch(searchPizza(pizzaListSearh));
    }, 300);
    return () => clearTimeout(Debounce);
  }, [dispatch, pizzaListSearh, value]);

  const removeClear = () => {
    dispatch(getValue(""));
    setValue("");
  }

  return (
    <>
      <div className="relative text-xs md:text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-4 h-4 z-10 absolute left-1 top-0.5 md:top-1.5 opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <svg
          onClick={() => removeClear()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-4 h-4 z-10 absolute right-1.5 top-0.5 md:top-1.5 opacity-50 hover:opacity-100 hover:cursor-pointer "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {/* <div className=" absolute">
          
        </div> */}
        <input
          value={value}
          onChange={onChangeInput}
          className="pl-5 md:px-7 py-0.5 appBarFindInput"
          type="text"
          placeholder="Find your pizza..."
        />
      </div>
    </>
  );
};
