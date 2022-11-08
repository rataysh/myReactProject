import React from "react";

const altDescription = "Shop logotype";
const logoImg = require("../../images/appBarLogo.png");

export const AppLogo:React.FC = () => {
  return (
    <div className="flex top-0 place-items-center mr-3">
      <img className="w-10 h-10" src={logoImg} alt={altDescription} />
      <span className="font-serif text-sm md:text-lg">Pizza Shop</span>
    </div>
  );
}
