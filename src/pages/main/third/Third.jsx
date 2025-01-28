import React from 'react'
import { ChartMixed, FaceExplode, MapPinAlt } from "flowbite-react-icons/outline";

const Third = () => {
    return (
        <div className='mt-10 py-5'>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Lorem Ipsum</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>25.6K</h1>
                    <ChartMixed className="w-12 h-12"/>
                </div>
            </div>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Lorem Ipsum</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>8855</h1>
                    <FaceExplode className="w-12 h-12"/>
                </div>
            </div>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Lorem Ipsum</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>3.5K</h1>
                    <MapPinAlt className="w-12 h-12"/>
                </div>
            </div>
        </div>
    )
}

export default Third