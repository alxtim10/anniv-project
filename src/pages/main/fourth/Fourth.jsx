import React from 'react'

const Fourth = () => {
    return (
        <div className='mt-20'>
            <h1 className='font-bold'>Title</h1>
            <div className='w-full h-64 bg-red-500 rounded-lg mt-5'></div>
            <div className='flex items-center justify-center gap-3'>
                <div className='w-full h-64 bg-orange-500 rounded-lg mt-5'></div>
                <div className='w-full h-64 bg-orange-300 rounded-lg mt-5'></div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 mt-10'>
                <div className='w-64 rotate-6 h-64 bg-indigo-300 rounded-lg mt-5'></div>
                <div className='ml-20 -rotate-3 w-64 h-64 bg-indigo-300 rounded-lg mt-5'></div>
                <div className='w-64 rotate-3 h-64 bg-indigo-300 rounded-lg mt-5'></div>
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