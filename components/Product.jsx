import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, productLine, slug, price }, dimensions }) => {

    return (
        
        <Link href={`/product/${slug.current}`}>
            <div className="flex flex-col justify-between gap-2">
                <img 
                    src={urlFor(image && image[0])}
                    width={dimensions}
                    height={dimensions}
                    className="product-image"
                    onMouseOver={e => (e.currentTarget.src = urlFor(image && image[1]))}
                    onMouseOut={e => (e.currentTarget.src = urlFor(image && image[0]))}
                ></img>

                <p>{productLine}</p>
                
                <p>{name}</p>

                <p className="font-bold">${price.toFixed(2)}</p>

            
            </div>
        </Link>
        
    )
}

export default Product
