import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, productLine, slug, price } }) => {

    return (
        <div className="card w-96 bg-bg-100 shadow-xl">
            <Link href={`/product/${slug.current}`}>
                <div className="card-body">
                    <img 
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                        onMouseOver={e => (e.currentTarget.src = urlFor(image && image[1]))}
                        onMouseOut={e => (e.currentTarget.src = urlFor(image && image[0]))}
                    ></img>

                <p>{productLine}</p>
                
                <p>{name}</p>

                <p>${price}</p>

             
                </div>
            </Link>
        </div>
    )
}

export default Product
