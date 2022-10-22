import React from "react";
import "../../assets/images/appBarLogo.png";

const altDescription = "Shop logotype";
const logoImg = "appBarLogo.png"

export function AppLogo() {
    return (
        <div className=" flex top-0 place-items-center">
            <img className="w-10 h-10" src={logoImg} alt={altDescription}/>
            <span className="font-serif">Pizza Shop</span>
        </div>
    );
}


