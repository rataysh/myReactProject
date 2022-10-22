import React from 'react';
import { AppLogo } from './tsx/appBar/appLogo';
import { AppSign } from './tsx/appBar/appSign';


export function App() {
  return (
    <div className="container mx-auto p-5">
        <div className="flex place-items-center justify-between">
            <AppLogo />
            {/* <AppMenu props={appBarMenuList}/>
            <AppFindAndBuy /> */}
            <AppSign />
        </div>
    </div>
  );
}

