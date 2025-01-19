import React from 'react'
import WalkingCarousel from '../walking-carousel/WalkingCarousel'

const First = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 8
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <section>
            <h1 className='font-bold'>Title</h1>
            <div className='flex items-center justify-center mt-3 gap-2'>
                <div className='w-full h-64 bg-blue-300 rounded-lg'></div>
                <div className='flex flex-col items-center justify-center gap-2 h-64'>
                    <div className='w-40 h-full bg-green-300 rounded-lg'></div>
                    <div className='w-40 h-full bg-red-300 rounded-lg'></div>
                </div>
            </div>
            <div className='w-full h-64 bg-orange-300 rounded-lg mt-5'></div>
            <WalkingCarousel slides={SLIDES} options={OPTIONS} />
        </section>
    )
}

export default First