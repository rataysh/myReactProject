import React from 'react';
import AppFindAndBuy from './tsx/appBar/appFindAndBuy';
import { AppLogo } from './tsx/appBar/appLogo';
import { AppMenu } from './tsx/appBar/appMenu';
import { AppSign } from './tsx/appBar/appSign';
import { appBarMenuList as requestAppBarMenu } from './tsx/appBar/appBarRequest/requestAppMenu';
import { CardPizza } from './components/cardPizza/cardPizza';
import { requestCardPizza } from './components/cardPizza/cardPizzaRequest/cardPizzaRequest';


export function App() {
  return (
    <div className="container mx-auto p-5">
        <div className="flex place-items-center justify-between">
            <AppLogo />
            <div className="flex w-1/5 justify-between">
              <AppFindAndBuy />
              <AppSign />
            </div>
        </div>
        <div className="w-1/3 mt-7 flex place-content-between space-x-1">
          {requestAppBarMenu.map(appBarMenuData => 
          <AppMenu appBarMenuData={appBarMenuData} key={appBarMenuData.id}/>)}
        </div>
        <div>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {requestCardPizza.map(templateCardPizza => 
              <CardPizza templateCardPizza={templateCardPizza} key={templateCardPizza.id} />)}
              {/* <CardPizza/> */}
            </div>
        </div>
      
    </div>
  );
}
