import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const FooterBanner = ({ footerBanner }) => {
    return (
        <div>
           <div className="hero h-96" style={{ backgroundImage: `url(${urlFor(footerBanner.image)})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-right text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Invincible skin starts here</h1>
                    <p className="mb-5">The best skincare and acne products.</p>
                    
                    <div>
                        <Link href=''>
                            <button type="button" className="btn btn-primary">{ footerBanner.buttonText }</button>
                        </Link>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner
