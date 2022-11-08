import React, { useRef } from "react";
import { AppLogo } from "./tsx/appBar/appLogo";
import { AppMenu } from "./tsx/appBar/appMenu";
import { AppSign } from "./tsx/appBar/appSing";
import { CardPizza } from "./components/cardPizza/cardPizza";
import { requestCardPizza } from "./components/cardPizza/cardPizzaRequest/cardPizzaRequest";
import { AboutAs } from "./tsx/footer/footer";
import { AppBarFind } from "./tsx/appBar/appBarFind/appBarFind";
import { AppBarBuy } from "./tsx/appBar/appBarBuy";

export const App: React.FC = () => {
  const refHome = useRef<HTMLElement>(null);
  const refPizza = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLElement>(null);
  const goToElement = (refElement: React.RefObject<HTMLElement>) => {
    if (refElement && refElement.current) {
      refElement.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-5">
      <header ref={refHome} className="flex place-items-center justify-between">
        <AppLogo />
        <AppBarFind />
        <AppSign />
      </header>
      <div className="flex items-center justify-between">
        <nav className="flex items-center justify-start  space-x-5 mt-7 place-content-between">
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

      <div>
        <div ref={refPizza} className="mt-7 font-sans text-3xl">
          Pizza
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {requestCardPizza.map((templateCardPizza) => (
            // templateCardPizza.count = 0,
            <CardPizza
              templateCardPizza={templateCardPizza}
              key={templateCardPizza.id}
            />
          ))}
        </div>
      </div>
      <footer ref={refFooter}>
        <AboutAs />
      </footer>
    </div>
  );
};
