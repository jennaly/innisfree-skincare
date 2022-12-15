import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';


const Navbar = () => {
    return (
        <div className="flex justify-between">
             <p className="logo">
                <Link href="/">Innisfree</Link>
            </p>

            <button type="button"
            className="cart-icon" 
            onClick="">
                <AiOutlineShopping />
                <span>0</span>
            </button>

          

        </div>
    )
}

export default Navbar
