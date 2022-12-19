import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4">
                <div className="items-center grid-flow-col">
                    
                    <p>@Innisfree 2022</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end icons">
                    <Link href="/"><AiFillInstagram /></Link>
                    <Link href="/"><AiOutlineTwitter /></Link>
                    <Link href="/"><AiFillFacebook /></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer
