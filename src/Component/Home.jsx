import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirts from './Tshirts';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart =(carts)=>{

        const exist = cart.find(crt=> crt._id === carts._id);
        if(exist){
            toast("You have already adeded this one")
        }
        else{
            const newProduct=[...cart,carts];
            setCart(newProduct);
        }

        
    }

    const handleDeleteToCart=(id)=>{
        const remaining = cart.filter(pd=> pd._id !== id);
        setCart(remaining);
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

            <div className="cart-conatiner md:w-1/3 relative">
                <Cart
                    cart={cart}
                    handleDeleteToCart={handleDeleteToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;