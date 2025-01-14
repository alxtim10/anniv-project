import React from 'react'

const Hero = () => {
    return (
        <section className='min-h-screen flex items-center justify-center'>
            <div className="flex items-center justify-center transition-all">
                <div className="flex flex-col items-center justify-center gap-2 
                bg-white p-2 pb-5 rounded-md border border-gray-300 shadow-md rotate-6
                translate-x-4 hover:translate-x-0 hover:rotate-0 transition-all">
                    <div className="w-[10rem] h-40 bg-gray-200 p-5"></div>
                    <h1 className="font-bold text-sm mt-1 text-gray-600">Lorem Ipsum</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero