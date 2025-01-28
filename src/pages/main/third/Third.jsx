import React from 'react'
import { ChartMixed, FaceExplode, MapPinAlt } from "flowbite-react-icons/outline";

const Third = () => {
    return (
        <div className='mt-10 py-5'>
            <h1 className='font-bold text-2xl'>Statistics</h1>
            <h1 className='text-xs'>ps. not real baby its just for fun</h1>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Weight Gain</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>5 Kg</h1>
                    <ChartMixed className="w-12 h-12"/>
                </div>
            </div>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Steps together</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>235K</h1>
                    <FaceExplode className="w-12 h-12"/>
                </div>
            </div>
            <div className='mt-5 border-b border-b-gray-400'>
                <h1 className='font-bold text-lg'>Places we went</h1>
                <div className='flex items-center justify-between text-blue-800'>
                    <h1 className='text-[7rem]'>50++</h1>
                    <MapPinAlt className="w-12 h-12"/>
                </div>
            </div>
        </div>
    )
}

export default Third