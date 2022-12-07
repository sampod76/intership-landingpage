import React from 'react';
import Card from './Card';

const Home = () => {
    return (
        <div className='flex justify-around  p-2  '>

            <div className='hidden lg:block'>
                <div className=''>

                    <Card></Card>
                </div>
            </div>
            <div className='w-full lg:ml-40 md:mx-9 font-semibold '>
                <h1 className='md:text-3xl font-bold text-black my-4'>Add PG</h1>
                <form className='md:text-lg flex flex-col gap-5 ' >
                    <div className='flex flex-col gap-2 mt-2 md:text-lg'>

                        <label>PG Name</label>
                        <input className='border-2 rounded-lg border-gray-200 p-2' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col gap-2 mt-2 md:text-lg'>

                        <label>Phone</label>
                        <input className='border-2 rounded-lg border-gray-200 p-2' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col gap-2 mt-2 md:text-lg'>

                        <label>PG Address</label>
                        <input className='border-2 rounded-lg border-gray-200 p-2' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col gap-2 mt-2 md:text-lg'>

                        <label>City</label>
                        <input className='border-2 rounded-lg border-gray-200 p-2' type="text" name="" id="" />
                    </div>

                    <div className='mt-2'>
                        <h1>Gender</h1>
                        <div className='flex justify-around mt-4 gap-6'>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Female</label>
                            </div>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Unisex</label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h1>Types of Room Sharing</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 mt-4 gap-4'>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">1 room</label>
                            </div>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">2 room</label>
                            </div>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">3 room</label>
                            </div>
                            <div className='rounded-lg text-center p-2 border-2 w-full space-x-2'>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">4 room</label>
                            </div>
                        </div>
                    </div>

                    <div className='my-3'>
                        <h1 className='my-2 font-bold '>Room Sharing Price</h1>
                        <hr />

                        <div className='grid grid-cols-2 gap-3 mt-2'>
                            <div  className='lg:mt-4'>
                                <h1 className=''>Single Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 p-2 mt-2 w-full' />
                            </div>
                            <div className='lg:mt-4'>
                                <h1 className=''>Double Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 p-2 mt-2 w-full' />
                            </div>
                            <div className='lg:mt-4'>
                                <h1 className=''>Triple Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 p-2 mt-2 w-full' />
                            </div>
                            <div className='lg:mt-4'>
                                <h1 className=''>Four Room Price</h1>
                                <input type="text" name="" id="" className='border-2 rounded-lg border-gray-200 p-2 mt-2 w-full' />
                            </div>
                        </div>
                    </div>

                    <div className='my-3'>
                        <h1 className='my-2'>Upload Images</h1>
                        <div className='grid grid-cols-3 gap-2' >
                            <div className='flex flex-col justify-center items-center rounded-lg border-2 border-gray-300  w-full md:h-[16rem]  lg:h-[17.75rem]'>
                                <h1>+</h1>
                                <h1>Cover Image</h1>
                            </div>
                            <div className=' w-full  md:h-[16rem]  lg:h-[17.75rem] rounded-lg border-2 border-gray-300'>
                                <img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" className='h-[50%] w-full rounded-t-lg' />
                                <div className='mt-2'>
                                    <h1 className='lg:p-2 p-1 rounded-2xl bg-[#7065F0] w-[30%]'> </h1>
                                    <h1 className='lg:p-2 p-1 rounded-2xl bg-[#000929] w-[30%]  mt-2'> </h1>
                                    <h1 className='lg:p-2 p-1 rounded-2xl bg-[#878787] w-[70%]  mt-2'> </h1>
                                    <h1 className='lg:p-2 p-1 rounded-2xl bg-[#878787] w-[90%]  mt-2'> </h1>

                                </div>
                            </div>
                          
                           

                        </div>
                    </div>

                    <div className='mt-2 border-2 border-gray-300 p-2 rounded-lg'>
                        <div className='grid grid-cols-6 gap-1 justify-between items-center'>
                            <div className='flex flex-col justify-center items-center border-2 border-gray-300 rounded-xl h-[5rem] lg:h-[6.875rem] text-center text-xs'>
                                <h1>+</h1>
                                <h1>More</h1>
                                <h1>Uplode 5 image</h1>
                            </div>
                            <div className=' h-[5rem] lg:h-[6.875rem]'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-[5rem] lg:h-[6.875rem]'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-[5rem] lg:h-[6.875rem]'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className=' h-[5rem] lg:h-[6.875rem]'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>
                            <div className='h-[5rem] lg:h-[6.875rem]'>
                                <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='opacity-70 w-full h-full rounded-lg' />
                            </div>

                        </div>
                    </div>
                    <div className='flex justify-end gap-2 mt-2'>
                        <button className='bg-[#7065F0] p-3 rounded-lg text-center text-lg w-[10rem] text-white font-bold'>Reject</button>
                        <button className='bg-[#7065F0] p-3 rounded-lg text-center text-lg w-[10rem] text-white font-bold'>Reject</button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Home;