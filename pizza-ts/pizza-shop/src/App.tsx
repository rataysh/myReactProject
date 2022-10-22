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
            {appBarMenuList.map(appBarMenuData => <AppMenu appBarMenuData={appBarMenuData} />)}
            <AppFindAndBuy />
            <AppSign />
        </div>
    </div>
  );
}

