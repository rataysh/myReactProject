/** @format */

import React from "react";
import {AboutDev} from "./aboutDev";

export const AboutMe: React.FC = () => {
    return (
        <div className='p-10 bg-gradient-to-l from-slate-600 bg-slate-800'>
            <div className='flex items-center justify-center'>
                <div>
                    <p className='text-sans font-medium text-2xl text-slate-100'>
                        Designed and Coded By
                    </p>
                    <p className='flex items-center justify-center space-x-1 text-footer'>
                        Denis Otkidach
                    </p>
                    <AboutDev
                        gitLink='https://github.com/rataysh'
                        linkedLink='https://www.linkedin.com/in/denis-otkidach-developer/?locale=en_US'
                        telegramLink='https://t.me/alabama_homie'
                    />
                    {/* <div className='flex items-center space-x-1'>
                        <p className='text-footer pr-1'>Backend:</p>
                        <AboutDev
                            gitLink='https://github.com/grivdm'
                            linkedLink='https://www.linkedin.com/in/dmitry-grishin-b22b0281/'
                            telegramLink='https://t.me/mrG_I_D'
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};
