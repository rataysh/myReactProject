import React from 'react';
import AppFindAndBuy from './tsx/appBar/appFindAndBuy';
import { AppLogo } from './tsx/appBar/appLogo';
import { AppMenu } from './tsx/appBar/appMenu';
import { AppSign } from './tsx/appBar/appSign';
import { appBarMenuList } from './tsx/appBar/requestFromBack/requestAppMenu';


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
        <div className="w-1/3 mt-7 flex place-content-between">
          {appBarMenuList.map(appBarMenuData => <AppMenu appBarMenuData={appBarMenuData} />)}
        </div>
    </div>
  );
}

