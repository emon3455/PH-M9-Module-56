import React from 'react';

const Tshirts = ({tshirt}) => {

    const {_id , price, picture, name, gender} = tshirt;

    return (
        <div className='bg-sky-100 p-4'>

            <div className="mb-2 rounded-lg">
                <img className='h-80 w-60 rounded-lg mx-auto' src={picture} alt="" />
            </div>
            <h4 className='text-xl'>Name: <span className='font-semibold'>{name}</span></h4>
            <h4 className='text-xl'>Price: <span className='font-semibold'>{price}</span></h4>
            <button className='text-white bg-sky-500 text-xl p-1 rounded-xl hover:bg-red-500 duration-500'> Purchase Now </button>
        </div>
    );
};

export default Tshirts;