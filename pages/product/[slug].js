import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { useRouter } from 'next/router';

const ProductDetails = ({ product, productsFromSameLine }) => {

    const router = useRouter(); 

    const { image, name, details, price, ingredients, instruction } = product;
    const { onAdd, setShowCart } = useStateContext();
    const [productImageIndex, setProductImageIndex] = useState(0);
    const [qty, setQty] = useState(1);

    const handleBuyNow = () => {
        onAdd(product, qty)
        setShowCart(true);
    }

    const decQty = () => {
        setQty(prevQty => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    const incQty = () => {
        setQty(prevQty => {
            return prevQty + 1;
        })
    }

    
    const resetProductLocalState = () => {
        setProductImageIndex(0);
        setQty(1);
    }

    
    useEffect(() => {
        const handleRouteChange = () => {
            resetProductLocalState();
        }
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", () => {
                console.log("stopped");
            })
        }
    }, [router.events]);


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div>
                        <img src={urlFor(image && image[productImageIndex])} className="max-w-xl rounded-lg shadow-2xl" />
                        <div className="small-images-container flex justify-center gap-6">
                            {image?.map((item, i) => (
                                <div className="w-36 shadow-xl mt-4" key={i}>
                                    <img
                                        key={i} 
                                        src={urlFor(item)}
                                        className={i === productImageIndex ? 'small-image selected-image' : 'small-image'}
                                        onMouseEnter={() => setProductImageIndex(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="max-w-lg">
                        <h2 className="text-5xl font-bold">{name}</h2>
                        <p className="py-6">{details}</p>
                        <p className="py-6">${price.toFixed(2)}</p>
                        <div className="quantity">
                            <h3>Quantity:</h3>
                            <p className="quantity-desc flex">
                                <span className="minus outline p-2" onClick={decQty}><AiOutlineMinus /></span>
                                <span className="num outline p-2 px-4">{qty}</span>
                                <span className="plus outline p-2" onClick={incQty}><AiOutlinePlus /></span>
                            </p>

                            <div className="buttons flex gap-4">
                                <button type="button" className="add-to-cart btn btn-primary" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                                <button type="button" className="buy-now btn btn-secondary" onClick={ handleBuyNow }>Buy Now</button>
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
          product,
          productsFromSameLine
        }
    }
}

export default ProductDetails
