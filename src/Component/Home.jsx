import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from './Tshirts';

const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div className='container mx-auto p-1 md:flex my-4 gap-2'>

            <div className="product-container md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-2">

                {
                    tshirts.map(tshirt=> <Tshirts
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></Tshirts>)
                }
                
            </div>

            <div className="cart-conatiner md:w-1/3">
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Home;