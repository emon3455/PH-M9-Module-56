import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from './Tshirts';
import Cart from './Cart';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart =(carts)=>{
        const newProduct=[...cart,carts];
        setCart(newProduct);
    }

    return (
        <div className='container mx-auto p-1 md:flex my-4 gap-2'>

            <div className="product-container md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-2">

                {
                    tshirts.map(tshirt=> <Tshirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirts>)
                }
                
            </div>

            <div className="cart-conatiner md:w-1/3">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;