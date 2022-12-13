import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
    return (
        <div>
           <div className="hero min-h-screen" style={{ backgroundImage: `url(${urlFor(heroBanner.image)})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-right text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Invincible skin starts here</h1>
                    <p className="mb-5">The best skincare and acne products.</p>
                    
                    <div>
                        <Link href=''>
                            <button type="button" className="btn btn-primary">{ heroBanner.buttonText }</button>
                        </Link>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
