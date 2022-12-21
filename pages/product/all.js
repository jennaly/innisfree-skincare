import React from 'react';
import { client } from '../../lib/client';
import { Product } from '../../components';

import Link from 'next/link';

const all = ({ products }) => {
    return (
        <div className="flex flex-col justify-center bg-base-100 md:w-10/12 xl:w-9/12 mx-auto px-[20px]">
            <div className="text-xs breadcrumbs flex lg:text-lg lg:mt-3 lg:text-sm">
                        <ul className="mx-auto flex-wrap justify-center">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Products</Link></li>
                            <li>All Products</li>
                        </ul>
            </div>

            <div className="flex flex-wrap gap-y-8 justify-between mt-3 lg:mt-10">
                {products?.map((product, index) => {
                    return (
                  
                        <div className="w-[48%] lg:w-[30%] xl:w-[23%]" key={index}>
                            <Product key={product._id} product={product} dimensions={500} />
                        </div>
                  
                    )})}
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    return {
        props: {
            products,
        }
    }
}

export default all
