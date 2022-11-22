import React from "react";

export const AppSign: React.FC = () => {
  // const dispatch = useAppDispatch();

  return (
    <button
      // onClick={() => console.log(10) }
      className="ml-2 button-orange p-1 bg-orange-300 rounded-xl flex items-center"
    >
      <span className="text-xs md:text-base">Sing in</span>
    </button>
  );
};
