import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    
                    <p>@Innisfree 2022</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <AiOutlineFacebook />
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                </div>
            </footer>
        </div>
    )
}

export default Footer
