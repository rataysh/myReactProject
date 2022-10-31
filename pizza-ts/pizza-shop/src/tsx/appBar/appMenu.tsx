import React from "react";

interface AllFuncGoTo {
    refElement: React.RefObject<HTMLElement>,
    goToElement: (args: React.RefObject<HTMLElement>) => void,
    name: string
}
    
export function AppMenu(props: AllFuncGoTo ) {
    return (
        <div className="font-serif">
            <button className="appBarMenuHoverButton" onClick={() => props.goToElement(props.refElement)}>
                {props.name}
            </button>
        </div>
    )
};


