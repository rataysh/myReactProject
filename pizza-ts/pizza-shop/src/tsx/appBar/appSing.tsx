import React from "react";
// import { testReq, tetsFunc } from "../../API/allPizzaRequest/allPizzaRequest";

export const AppSign: React.FC = () => {
  return (
    <button
      // onClick={() => tetsFunc()}
      className="ml-2 button-orange p-1 bg-orange-300 rounded-xl flex items-center"
    >
      <span className="text-xs md:text-base">Sing in</span>
    </button>
  );
};
