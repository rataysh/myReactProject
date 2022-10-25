import React from 'react';
import { AboutDev } from './aboutDev';


export function AboutAs() {
    return (
        <div className='mt-20 p-4 bg-gradient-to-l from-slate-600 bg-slate-800 bottom-0'>
            <div className='flex justify-between items-end'>
                <p className='text-footer'>
                    This is a test project for the portfolio
                </p>
                <div className=''>
                    <p className='text-sans font-medium text-slate-100'>
                        Developers:
                    </p>
                    <div className='flex items-center space-x-1'>
                        <p className='text-footer'>
                            Frontend:
                        </p>
                        <AboutDev gitLink='https://github.com/rataysh'
                         linkedLink='https://www.linkedin.com/in/denis-otkidach-ab946a216/?locale=en_US'
                         telegramLink='https://t.me/alabama_homie'/>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <p className='text-footer pr-1'>
                            Backend:
                        </p>
                        <AboutDev gitLink='https://github.com/grivdm'
                         linkedLink='https://www.linkedin.com/in/dmitry-grishin-b22b0281/'
                         telegramLink='https://t.me/mrG_I_D' />
                    </div>
                </div>
            </div>

        </div>
    )
}