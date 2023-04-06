import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-black text-white container mx-auto md:flex justify-between items-center text-xl'>

            <div className="">
                <h2 className=''>Buy Now</h2>
                <div className="">
                    
                </div>
            </div>

            <ul className=''>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/orders">Order Reviews</Link>
                <Link to="/contact">Contacts</Link>
            </ul>
        </nav>
    );
};

export default Header;