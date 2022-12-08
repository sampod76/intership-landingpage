import React from 'react';
import Card from './Card';

const Home = () => {
    return (
        <div className='flex justify-between gap-[7%] p-1  '>

            <div className='hidden md:block'>
                <div className=''>

                    <Card></Card>
                </div>
            </div>
            <div className=' font-semibold '>
                <h1 className='md:text-3xl font-bold text-black mb-4'>Add PG</h1>
                <form className=' flex flex-col gap-3 ' >
                    <div className='flex flex-col   '>

                        <label className='mb-1'>PG Name</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>Phone</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>PG Address</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col   '>

                        <label className='mb-1'>City</label>
                        <input className='border-2 rounded-lg border-gray-200 mt-1 p-1' type="text" name="" id="" />
                    </div>

                    <div className=''>
                        <h1 className='mb-1'>Gender</h1>
                        <div className='flex justify-around gap-2 md:gap-10 sm:text-lg'>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Female</label>
                            </div>
                            <div className='rounded-lg text-center  sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Unisex</label>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='mb-1'>Types of Room Sharing</h1>
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-6 md:text-lg '>
                            <div className='rounded-lg text-center smm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">1 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">2 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">3 room</label>
                            </div>
                            <div className='rounded-lg text-center sm:p-1 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">4 room</label>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='my-2 font-bold '>Room Sharing Price</h1>
                        <hr />

                        <div className='grid grid-cols-2 gap-3 mt-1'>
                            <div >
                                <h1 >Single Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' />
                            </div>
                            <div className=''>
                                <h1 className=''>Double Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' />
                            </div>
                            <div className=''>
                                <h1 className=''>Triple Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' />
                            </div>
                            <div className=''>
                                <h1 className=''>Four Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 mt-1 p-1  w-full' />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='my-2'>Upload Images</h1>
                        <div className='grid grid-cols-3 gap-2 sm:gap-7' >
                            <div className='flex flex-col justify-center items-center rounded-lg border-2 border-gray-300  w-full sm:h-[90%] lg:h-[14.8125rem] text-center'>
                                <h1>+</h1>
                                <h1>Cover Image</h1>
                            </div>
                            <div className='sm:h-[90%] lg:h-[14.8125rem] rounded-lg border-2 border-gray-300'>
                                <img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" className='h-[50%] w-full rounded-t-lg' />
                                <div className=''>
                                    <h1 className='lg:p-2 p-1 mt-1 rounded-2xl bg-[#7065F0] w-[30%]'> </h1>
                                    <h1 className='lg:p-2 p-1 mt-1 rounded-2xl bg-[#000929] w-[30%]  '> </h1>
                                    <h1 className='lg:p-2 p-1 mt-1 rounded-2xl bg-[#878787] w-[70%]  '> </h1>
                                    <h1 className='lg:p-2 p-1 mt-1 rounded-2xl bg-[#878787] w-[90%]  '> </h1>

                                </div>
                            </div>
                          
                           

                        </div>
                    </div>

                    <div className=' border-2 border-gray-300 p-1 rounded-lg'>
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-1 justify-between items-center'>
                            <div className='flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl h-full text-center text-[8px] sm:text-xs'>
                                <h1>+</h1>
                                <h1>More</h1>
                                <h1>Uplode 5 image</h1>
                            </div>
                            <div className=' h-full'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-full'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-full'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-full'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className='h-full'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-end gap-2 '>
                        <button className='bg-[#7065F0] sm:p-3 p-1 rounded-lg text-center text-lg sm:w-[20%] text-white font-bold'>Reject</button>
                        <button className='bg-[#7065F0] sm:p-3 p-1 rounded-lg text-center text-lg sm:w-[20%] text-white font-bold'>Reject</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Home;