import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runConfetti } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    const resetCart = () => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }

    useEffect(() => {
        resetCart();
        runConfetti();
    }, []);

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Thank you for your order! </h1>
                    <p className="mt-4">Check your email inbox for the receipt.</p>
                    <p>If you have any questions, please email
                        <a className="email" href="mailto:order@example.com">
                            order@example.com
                        </a>
                    </p>
                    <button className="btn bg-green-700 hover:bg-green-600 border-none w-full mt-4">Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Success;