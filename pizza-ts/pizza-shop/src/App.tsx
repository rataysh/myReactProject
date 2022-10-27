import React, { useRef } from "react";
import AppFindAndBuy from './tsx/appBar/appFindAndBuy';
import { AppLogo } from './tsx/appBar/appLogo';
import { AppMenu } from './tsx/appBar/appMenu';
import { AppSign } from './tsx/appBar/appSign';
import { CardPizza } from './components/cardPizza/cardPizza';
import { requestCardPizza } from './components/cardPizza/cardPizzaRequest/cardPizzaRequest';
import { AboutAs } from './tsx/footer/footer';



export function App() {
  
  const refFooter = useRef<HTMLElement>(null); 
  const goToElement = (refElement: any) => {
    if (refElement && refElement.current) {
      refElement.current.scrollIntoView({behavior: 'smooth'});
    }
  }
  
  return (
      <div className="container mx-auto p-5">
          <header className="flex place-items-center justify-between">
              <AppLogo />
              <div className="flex justify-between">
                <AppFindAndBuy />
                <AppSign />
              </div>
          </header>
          <nav className="flex items-center justify-start  space-x-5 mt-7 place-content-between">
            <AppMenu refElement={refFooter} goToElement={goToElement} name={"Menu"}/>
            <AppMenu refElement={refFooter} goToElement={goToElement} name={"Pizza"}/>
            <AppMenu refElement={refFooter} goToElement={goToElement} name={"About as"}/>
          </nav>
          <body>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {requestCardPizza.map(templateCardPizza => 
              <CardPizza templateCardPizza={templateCardPizza} key={templateCardPizza.id} />)}
            </div>
          </body>
          <footer ref={refFooter}>
            <AboutAs />
          </footer>
      </div>
  );
}

