import React from "react";
import { IappBarMenu } from "./interface/InterfaceAppMenu";


interface AppBarMenuProps {
    appBarMenuData: IappBarMenu
}


export function AppMenu(props: AppBarMenuProps) {
    return (
        <div className="hover:text-slate-700 hover:underline decoration-slate-700 underline-offset-2 transition-all duration-100">
            <button className="font-serif flex place-items-center space-x-5">
                <div className="text-sm">{props.appBarMenuData.eachMenu}</div>
            </button>
        </div>
    )
};


