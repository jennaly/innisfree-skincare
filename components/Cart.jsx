import React, {useRef} from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi'
import { TiDelete, TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
        });


        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading('Redirecting...');

        stripe.redirectToCheckout({ sessionId: data.id });
    }


    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container w-full md:w-[450px] xl:w-[500px] px-5 lg:px-10 py-10 lg:py-5 flex flex-col justify-between">
                <div>
                    <button 
                        type="button"
                        className="flex w-full justify-between items-center mb-5"
                        onClick={() => setShowCart(false)}>
                            <h1 className="inline-block text-xl">Shopping Cart</h1>
                            <TfiClose className="inline-block" />
                        </button>

                    {cartItems.length < 1 && (
                        <div className="empty-cart">
                            <AiOutlineShopping size={150} className="mx-auto" />
                            <h3>Your shopping bag is empty</h3>
                            <Link href="/">
                                <button 
                                    type="button"
                                    onClick={() => setShowCart(false)}
                                    className="btn"
                                >
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    )}  

                    <div className="flex flex-col gap-5">
                        {cartItems.length >= 1 && cartItems.map((item, index) => (
                            <div key={item._id} className="flex w-full gap-5 mt-3">
                                <img src={urlFor(item?.image[0])} className="w-1/2 md:w-1/3"/>
                                <div className="flex flex-col w-2/3 my-auto gap-2">
                                    <div className="flex flex-col">
                                        <h2 className="w-full text-lg">{item.name}</h2>
                                        <span className="inline-block w-full">${item.price.toFixed(2)}</span>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                                        <p className="flex product-quantity-selector rounded-md items-center w-full px-2 py-1 justify-between bg-base-200">
                                            <button className="w-1/6 " onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus className="product-quantity"/></button>
                                            <span className="num inline-block p-2 px-4 w-4/6 text-center ">{item.quantity}</span>
                                            <button className="w-1/6" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus className="product-quantity"/></button>
                                        </p>

                                        <button 
                                            type="button"
                                            className="text-sm text-left"
                                            onClick={() => onRemove(item)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {cartItems.length >= 1 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-lg">
                            <h3 >Subtotal</h3>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                   

                        <div className="btn-container">
                            <button type="button" className="btn bg-green-700 hover:bg-green-600 border-none w-full" onClick={ handleCheckout }>
                                Checkout

                            </button>
                        </div>
                    </div>

                )}

            </div>
        </div>
    )
}

export default Cart
