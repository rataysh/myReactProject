import React from "react";
import { IappBarMenu } from "./interface/InterfaceAppMenu";


interface AppBarMenuProps {
    appBarMenuData: IappBarMenu
}


export function AppMenu(props: AppBarMenuProps) {
    return (
        <div>
            <span className="font-serif flex place-items-center space-x-5">
                <div className="text-xs">{props.appBarMenuData.eachMenu}</div>
            </span>
        </div>
    )
};


