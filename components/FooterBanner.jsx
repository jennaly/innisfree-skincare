import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const FooterBanner = ({ footerBanner }) => {
    return (
        <div>
           <div className="hero lg:h-[33rem] 2xl-[35rem]" style={{ backgroundImage: `url(${urlFor(footerBanner.image)})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
             
                <div className="flex h-full w-full items-center justify-center container mx-auto px-8 mb-40 my-auto">
                    <div className="flex flex-col gap-5 max-w-2xl text-left">

                        <h1 className="text-2xl tracking-wide text-white lg:text-4xl md:w-1/2">{ footerBanner.desc }</h1>
                        
                        <div>
                            <Link href='/product/all'>
                            <button type="button" className="transform rounded-md bg-green-700 px-8 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-green-600 focus:outline-none sm:mx-2 lg:mx-0">{ footerBanner.buttonText }</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FooterBanner
