/** @format */

import React, {useRef} from "react";
import {AppLogo} from "./tsx/appBar/appLogo";
import {AppMenu} from "./tsx/appBar/appMenu";
import {AppSign} from "./tsx/appBar/appSing";
import {CardPizza} from "./components/cardPizza/cardPizza";
import {AboutAs} from "./tsx/footer/footer";
import {AppBarFind} from "./tsx/appBar/appBarFind/appBarFind";
import {AppBarBuy} from "./tsx/appBar/appBarBuy";
import {useAppSelector} from "./hook";

export const App: React.FC = () => {
    const pizzaListAfterFiltred = useAppSelector(
        (state) => state.api.pizzaList
    );

    const refHome = useRef<HTMLElement>(null);
    const refPizza = useRef<HTMLDivElement>(null);
    const refFooter = useRef<HTMLElement>(null);

    const goToElement = (refElement: React.RefObject<HTMLElement>) => {
        if (refElement && refElement.current) {
            refElement.current.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <div className='container mx-auto p-5 flex flex-col min-h-full'>
            <div className='flex flex-col min-h-screen'>
                <header
                    ref={refHome}
                    className='flex place-items-center justify-between'>
                    <AppLogo />
                    <AppBarFind />
                    <AppSign />
                </header>
                <div className='flex items-center justify-between'>
                    <nav className='flex items-center justify-start  space-x-5 mt-7 place-content-between'>
                        <AppMenu
                            refElement={refHome}
                            goToElement={goToElement}
                            name={"Home"}
                        />
                        <AppMenu
                            refElement={refPizza}
                            goToElement={goToElement}
                            name={"Pizza"}
                        />
                        <AppMenu
                            refElement={refFooter}
                            goToElement={goToElement}
                            name={"About us"}
                        />
                    </nav>
                    <AppBarBuy />
                </div>

                <body className='flex-auto mb-10'>
                    <p ref={refPizza} className='mt-7 font-sans text-3xl'>
                        Pizza
                    </p>
                    {/* 
          {loading && <h2>Loading...</h2>}
          {error && <h2>An error occured: {error}</h2>} */}
                    {pizzaListAfterFiltred.length !== 0 ? (
                        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                            {pizzaListAfterFiltred.map((templateCardPizza) => (
                                <CardPizza
                                    templateCardPizza={templateCardPizza}
                                    key={templateCardPizza.id}
                                />
                            ))}
                        </div>
                    ) : (
                        <span className=' mt-10 flex items-center justify-center font-sans text-3xl'>
                            We could not find the pizza you requested, try again
                        </span>
                    )}
                </body>
                <footer ref={refFooter} className='w-full bottom-0'>
                    <AboutAs />
                </footer>
            </div>
        </div>
    );
};
