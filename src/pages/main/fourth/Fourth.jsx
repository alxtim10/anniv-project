import React from 'react'

const Fourth = () => {
    return (
        <div className='mt-20'>
            <h1 className='font-bold'>Highlights</h1>
            <img src='/images/20.jpg' className='w-full h-64 object-cover rounded-lg mt-5'></img>
            <div className='flex items-center justify-center gap-3'>
                <img src='/images/18.jpg' className='w-full h-64 object-cover rounded-lg mt-5'></img>
                <img src='/images/19.jpg' className='w-full h-64 object-cover rounded-lg mt-5'></img>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 mt-10'>
                <img src='/images/23.jpg' className='w-64 rotate-6 h-full object-cover rounded-lg mt-5'></img>
                <img src='/images/24.jpg' className='ml-20 -rotate-3 w-64 h-full object-cover rounded-lg mt-5'></img>
                <img src='/images/25.jpeg' className='w-64 rotate-3 h-full object-cover rounded-lg mt-5'></img>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <div className='w-full h-64 bg-orange-500 rounded-lg mt-5'></div>
                <div className='w-full h-64 bg-orange-300 rounded-lg mt-5'></div>
            </div>
            <div className='w-full h-64 bg-red-500 rounded-lg mt-5'></div>
        </div>
    )
}

export default Fourth