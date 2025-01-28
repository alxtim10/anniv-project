
import React from 'react'
const Hero = () => {
    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-14'>
            <h1 className='text-xl font-bold'>Hi, Baby</h1>
            <div className="flex items-center justify-center transition-all">
                <div className="flex flex-col items-center justify-center gap-2 
                bg-white p-2 pb-5 rounded-md border border-gray-300 shadow-md rotate-6
                translate-x-4 hover:translate-x-0 hover:rotate-0 transition-all">
                    <img src='/public/images/1.HEIC' className="w-[10rem] h-48 object-cover"></img>
                    <h1 className="font-bold text-sm mt-1 text-gray-600">Timo Thania</h1>
                </div>
            </div>
            <div className='px-10 text-center font-semibold'>
                <p>Happy 1st Anniversary, my love! This year has been the most amazing adventure with you, 
                    and I feel so lucky to have you by my side. 
                    Here's to all the memories we've created and to the many more to come. 
                    I love you more than words can say.</p>
            </div>
        </section>
    )
}

export default Hero