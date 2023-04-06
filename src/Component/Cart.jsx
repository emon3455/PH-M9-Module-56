import React from 'react';

const Cart = ({cart, handleDeleteToCart}) => {

    return (
        <div className='text-xl bg-amber-300 rounded-xl p-2'>

            <h2 className='text-center'>Totall Product: {cart.length}</h2>
            
            <div className="">
                {
                    cart.map(product=> {
                        return <div className="shadow-xl bg-white p-4 my-2 rounded-md flex justify-between items-center ">
                                <div className="">
                                    <h2>Product: {product.name}</h2>
                                    <h2>Price: {product.price}</h2>
                                </div>
                                <button
                                    onClick={()=>handleDeleteToCart(product._id)}
                                    className='bg-red-400 px-3 py-1 rounded-full text-white font-bold'> X </button>
                            </div>
                    })
                }
            </div>
            
        </div>
    );

};

export default Cart;