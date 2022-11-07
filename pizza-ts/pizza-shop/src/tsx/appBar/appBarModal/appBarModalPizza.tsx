import React from "react";
import { IListPizza } from "../../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";
import { useAppDispatch } from "../../../hook";
import { calcSize } from "../../../logic/calcSize";
import { addItem, removeItem, minusItem } from "../../../redux/slices/cartSlice"


interface IModalPizza {
    templateModalPizza: IListPizza,
}


export const ModalPizza: React.FC<IModalPizza> = (props) => {
    const dispatch = useAppDispatch();   

    return (  
        <> 
            <div className="relative my-1 pb-2 pt-1 lg:px-4 md:px-2 sm:px-1 w-full flex-col items-center border rounded-xl bg-slate-50 lg:text-lg md:text-lg lg:font-medium md:font-medium font-sans">
                <div className="flex justify-end ">
                    <button onClick={() => dispatch(removeItem(props.templateModalPizza))}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="relative flex sm:flex items-center">
                    <div className="w-1/5">
                        <img src={props.templateModalPizza.imgPizza} alt={props.templateModalPizza.name}/>
                    </div>
                    <div className="flex flex-col mx-1">
                        <span>{props.templateModalPizza.name}</span>
                        <span className="text-sm font-normal">{props.templateModalPizza.size} size</span>
                    </div>
                </div>
                <div className="flex justify-between items-center lg:px-5 md:px-3 sm:px-2">
                    <div className="mt-2">
                        ${((props.templateModalPizza.price + calcSize(props.templateModalPizza)) * (props.templateModalPizza.count ?? 1)).toFixed(2)}
                    </div>
                    <div className="bg-slate-200 border border-slate-300 rounded-xl mt-2 flex items-center justify-center lg:space-x-2 md:space-x-1">
                        <button onClick={() => dispatch(minusItem(props.templateModalPizza))} className={(props.templateModalPizza.count === 1 ? "disabled" : "") + " border-r border-slate-300"}> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <div>
                            {props.templateModalPizza.count}
                        </div>
                        <button onClick={() => dispatch(addItem(props.templateModalPizza))} className="border-l border-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>  
                </div>  
            </div>
        </>
    )    
};
