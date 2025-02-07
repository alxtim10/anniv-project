import React from 'react'

const Fifth = () => {
    return (
        <div className='mt-20'>
            <div>
                <h1 className='font-bold'>First place I saw you</h1>
                <img src='/images/buaran.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-end'>First place you saw me <span className='text-xs'>(you fell in love)</span></h1>
                <img src='/images/grandwis.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold'>First place we talked</h1>
                <img src='/images/bektim.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-center'>First time we texted</h1>
                <img src='/images/38.jpg' className='w-full shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
        </div>
    )
}

export default Fifth