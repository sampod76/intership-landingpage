import React from 'react';

const Card = () => {
    return (
        <div>
            <div className='lg:w-[42.625rem] lg:h-[55.25rem] bg-[#7065F0] rounded-2xl flex flex-col justify-between text-lg lg:text-2xl text-white p-2 lg:p-5' >

                <h1 className='text-xl p-5 px-9 font-bold -mb-16 pt-10 tracking-[5px] '>PGWARS</h1>
                <div className='flex justify-around items-center mx-auto gap-6 '>
                    <img src="https://img.freepik.com/free-photo/amused-pretty-girl-with-curly-afro-hair-raises-palms-has-cheerful-expression-smiles-broadly-sees-something-funny-wears-white-sweater_273609-43437.jpg?w=996&t=st=1670394261~exp=1670394861~hmac=215c25f54dfcd9178bcbf7f78927c032ca129ca089bf652b5093fcd936cf2745" alt="" className='w-[10.875rem] h-[10.875rem] mr-24 rounded-full ' />

                    <div className='space-y-6  -ml-12 mt-3'>
                        <h1 className='md:text-2xl lg:text-5xl font-semibold tracking-wide -ml-9 font-Poppins'>Bruce Kent</h1>
                        <h2 className='text-[2.2rem] -ml-9'>Software Engineer</h2>
                    </div>
                </div>
                <hr className='w-[85%] mx-auto -mt-20 bg-white p-[1px] ' />

                <div className=' ml-[9%] space-y-7 -mt-20 '>

                    <div className='flex gap-5 items-center  '>
                        <h1 className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </h1>
                        <h1 className='text-3xl font-bold'>
                            9876543210 (Whatsapp)</h1>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>

                        </h1>
                        <h1 className='text-3xl font-bold'>brucekent@gmail.com</h1>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                        </h1>
                        <h1 className='text-3xl font-bold'> Los Angeles, USA</h1>
                    </div>
                </div>
                <div className='flex justify-around  pb-12'>
                    <div className='space-y-3 '>
                        <h1 className='font-bold text-[1.7925rem]'>Approved Businesses</h1>
                        <h1 className=''>5</h1>
                    </div>
                    <div className='space-y-3 text-center'>
                        <h1 className='font-bold text-[1.7925rem]'>Views</h1>
                        <h1>304</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;