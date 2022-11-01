import React from "react";
import { IcardPizza } from "../../../components/cardPizza/cardPizzaInterface/cardPizzaInterface";






interface IModalPizza {
    templateModalPizza: IcardPizza,
}


export const ModalPizza: React.FC<IModalPizza> = (props) => {
  
    return (
        <>
            <div className="relative my-1 pb-2 pt-1 lg:px-4 md:px-2 sm:px-1 w-full flex-col items-center border rounded-xl bg-slate-50 lg:text-lg md:text-lg lg:font-medium md:font-medium font-sans">
                <div className="flex justify-end ">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="relative flex sm:flex items-center">
                    <div className="w-1/5">
                        <img src={props.templateModalPizza.imgPizza} alt={props.templateModalPizza.name}/>
                    </div>
                    <div className="mx-1">
                        {props.templateModalPizza.name} 
                    </div>
                </div>
                <div className="flex justify-between items-center lg:px-5 md:px-3 sm:px-2">
                    <div className="mt-2">

                    </div>
                    <div className="bg-slate-200 border border-slate-300 rounded-xl mt-2 flex items-center justify-center lg:space-x-2 md:space-x-1">
                        <button > 
                     {/* className={(count === 1 ? "disabled" : "") + " border-r border-slate-300"} */}

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <div>
                            {'0000'}
                        </div>
                        <button className="border-l border-slate-300">
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
