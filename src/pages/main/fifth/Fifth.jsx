import React from 'react'

const Fifth = () => {
    return (
        <div className='mt-20'>
            <div>
                <h1 className='font-bold'>First place I saw you</h1>
                <img src='/public/images/buaran.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold text-end'>First place you saw me <span className='text-xs'>(you fell in love)</span></h1>
                <img src='/public/images/grandwis.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold'>First place we talked</h1>
                <img src='/public/images/bektim.png' className='w-full h-72 shadow-lg border rounded-lg mt-2 object-cover'></img>
            </div>
        </div>
    )
}

export default Fifth