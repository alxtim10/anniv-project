import React from 'react'
import WalkingCarousel from '../../../components/walking-carousel/WalkingCarousel'

const First = () => {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 8
    const SLIDES = [
        '/images/13.jpg',
        '/images/14.jpg',
        '/images/15.jpg',
        '/images/16.jpeg',
        '/images/17.jpg',
    ]

    return (
        <section>
            <h1 className='font-bold'>Highlights</h1>
            <div className='flex items-center justify-center mt-3 gap-2'>
                <img src='/images/3.jpg' className='w-full h-64 shadow-lg rounded-lg object-cover '></img>
                <div className='flex flex-col items-center justify-center gap-2 h-64'>
                    <img src='/images/4.jpg' className='w-40 h-full shadow-lg object-cover rounded-lg'></img>
                    <img src='/images/5.jpg' className='w-40 h-full shadow-lg object-cover rounded-lg'></img>
                </div>
            </div>
            <img src='/images/6.jpg' className='w-full h-64 object-cover rounded-lg mt-5'></img>
            <WalkingCarousel slides={SLIDES} options={OPTIONS} />
            <div className='flex items-center justify-center gap-2'>
                <img src='/images/7.jpg' className='w-full h-80 object-cover rounded-lg'></img>
                <img src='/images/8.jpg' className='w-full h-80 object-cover rounded-lg'></img>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5'>
                <img src='/images/9.jpg' className='w-full h-60 object-cover rounded-lg'></img>
                <img src='/images/11.jpg' className='w-36 h-60 object-cover rounded-lg'></img>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5'>
                <img src='/images/12.jpg' className='w-36 h-60 object-cover rounded-lg'></img>
                <img src='/images/10.jpg' className='w-full h-60 object-cover rounded-lg'></img>
            </div>
        </section>
    )
}

export default First