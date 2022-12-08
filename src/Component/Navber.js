import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-between items-center my-2 md:mb-8 lg:mb-16'>
           <a href="/" className='lg:text-3xl text-xl font-bold text-[ #262064]'>PGWars</a>
            <div className='flex space-x-10 lg:space-x-32'>
               <a href="/" className='py-2 px-5 font-medium'>Manage Property</a>
               <a href="/" className='bg-[#7065F0] hover:bg-[#342e77] py-2 px-5 rounded-lg text-white' >Log in</a>
            </div>
        </div>
    );
};

export default Navber;