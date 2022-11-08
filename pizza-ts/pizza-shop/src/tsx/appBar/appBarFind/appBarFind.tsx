import React from "react";

export const AppBarFind: React.FC = () => {
  return (
    <>
      <div className="realtive flex items-center">
        <div className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-4 h-4 z-10 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          className="px-7 appBarFindInput"
          type="text"
          placeholder="Find your favorite pizza..."
        />
      </div>
    </>
  );
};
