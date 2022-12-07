import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-between p-3'>
           <a href="/">PGWars</a>
            <div className='flex space-x-4'>
               <a href="">Manage Property</a>
               <a href="">Blog</a>
               <a href="">Log in</a>
            </div>
        </div>
    );
};

export default Navber;