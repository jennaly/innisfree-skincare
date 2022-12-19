import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
    return (
        <div>
           <div className="hero min-h-screen" style={{ backgroundImage: `url(${urlFor(heroBanner.image)})` }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="flex h-full w-full items-center justify-center container mx-auto px-8 mb-40">
                    <div className="max-w-2xl text-center">

                        <p className="mt-6 lg:text-xl text-white">{ heroBanner.desc }</p>

                        <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">{ heroBanner.smallText }</h1>
                        

                        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                            <Link href="">
                                <button type="button" className="transform rounded-md bg-green-700 px-8 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-green-600 focus:bg-green-600 focus:outline-none sm:mx-2">{ heroBanner.buttonText }</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
