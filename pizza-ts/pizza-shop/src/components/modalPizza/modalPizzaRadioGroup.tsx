import React from "react";
// import { IListPizza } from "../cardPizza/cardPizzaInterface/cardPizzaInterface";
// import { useAppDispatch } from "../../hook";
// import { addItem } from "../../redux/slices/cartSlice"



interface IModalButtonSize {
    size: string,
    setSize: (arg: string) => void,
}


export const ModalPizzaRadioGroup: React.FC<IModalButtonSize> = (props) => {
    return (
    <div className="mt-5 mx-2  py-1.5 w-1/2 flex items-center p-1.5 rounded-xl shadow-xl bg-slate-200">
        <button className={props.size === "sm" ? "modalPizzaRadioButton bg-white rounded-xl" : "modalPizzaRadioButton" }
        onClick={() => props.setSize("sm")}
        ><span>10"</span></button>
        <button className= {props.size === "md" ? "modalPizzaRadioButton bg-white rounded-xl" : "modalPizzaRadioButton" }
        onClick={() => props.setSize("md")}
        ><span>12"</span></button>
        <button className={props.size === "lg" ? "modalPizzaRadioButton bg-white rounded-xl" : "modalPizzaRadioButton" }
        onClick={() => props.setSize("lg")}
        ><span>14"</span></button>
    </div>




        // <div className="flex w-full grid-cols-3 rounded-xl p-2 bg-slate-200">
        //     <div>
        //         <input type="radio" name="size" id="sizeSm" value={'sm'} className="peer hidden w-1/3"/>
        //         <label htmlFor="sizeSm" className="w-1/3 peer-checked:bg-white">
        //             10"
        //         </label>
        //     </div>

        //     <div>
        //         <input type="radio" name="size" id="sizeMd" value={'md'} className="peer hidden w-1/3" checked/>
        //         <label htmlFor="sizeMd" className=" peer-checked:bg-white">
        //             12"
        //         </label>
        //     </div>

        //     <div>
                // <input type="radio" name="size" id="sizeLg" value={'lg'} className="peer hidden w-1/3"/>
                // <label htmlFor="sizeLg" className="w-1/3 peer-checked:bg-white">
                //     14"
                // </label>
        //     </div>
        // </div>
    )
};






