import React from 'react';
import Link from 'next/link';

import { Cart } from './';
import { useStateContext } from '../context/StateContext'


const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (

        <div className="navbar bg-base-100">

            <div className="navbar-start">

                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Shop</Link></li>
                </ul>
                </div>

                <p className="btn btn-ghost normal-case text-xl">
                    <Link href="/">Innisfree</Link>
                </p>

            </div>

            <div className="navbar-center hidden lg:flex">
              
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Shop</Link></li>
                </ul>

            </div>

            <div className="navbar-end">

                <div className="indicator">
                    <button type="button"
                    className="cart-icon" 
                    onClick={() => setShowCart(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{totalQuantities}</span>
                    </button>
                </div>

                {showCart && <Cart />}

            </div>

            

        </div>
    )
}

export default Navbar

