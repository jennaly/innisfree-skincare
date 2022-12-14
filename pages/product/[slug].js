import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';



const ProductDetails = ({ product, products, productsFromSameLine }) => {

    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div>
                        <img src={urlFor(image && image[index])} className="max-w-xl rounded-lg shadow-2xl" />
                        <div className="small-images-container flex justify-center gap-6">
                            {image?.map((item, i) => (
                                <div className="w-36 shadow-xl mt-4">
                                    <img
                                        key={i} 
                                        src={urlFor(item)}
                                        className={i === index ? 'small-image selected-image' : 'small-image'}
                                        onMouseEnter={() => setIndex(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="max-w-lg">
                        <h2 className="text-5xl font-bold">{name}</h2>
                        <p className="py-6">{details}</p>
                        <p className="py-6">${price}</p>
                        <div className="quantity">
                            <h3>Quantity:</h3>
                            <p className="quantity-desc flex">
                                <span className="minus outline p-2" onClick=''><AiOutlineMinus /></span>
                                <span className="num outline p-2 px-4">0</span>
                                <span className="plus outline p-2" onClick=''><AiOutlinePlus /></span>
                            </p>

                            <div className="buttons flex gap-4">
                                <button type="button" className="add-to-cart btn btn-primary" onClick={''}>Add to Cart</button>
                                <button type="button" className="buy-now btn btn-secondary" onClick=''>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <h2>Explore the rest of the {product.productLine} Collection</h2>

                <div className="flex justify-center gap-6">
                    {productsFromSameLine?.map((product => <Product key={product._id} product={product}/>))}
                </div>

            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current,
        }
    }));

    return {
        paths,
        fallback: 'blocking',
    }
}


export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    const productsFromSameLine = products.filter(e => e.productLine === product.productLine && e._id !== product._id);
    

    return {
        props: {
          products,
          product,
          productsFromSameLine
        }
    }
}

export default ProductDetails
