import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-900 text-white container mx-auto p-2 md:flex justify-between items-center text-xl'>

            <div className="md:w-1/3 md:text-left text-center">
                <h2 className='text-3xl text-sky-500 font-semibold'>Buy Now</h2>
            </div>

            <ul className='md:w-2/3 flex justify-around'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/orders">Order Reviews</Link>
                <Link to="/contact">Contacts</Link>
            </ul>
        </nav>
    );
};

export default Header;