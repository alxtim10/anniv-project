import React from 'react'

const Flower = () => {
    return (
        <div className='flex items-start justify-center relative  h-[600px]'>
            <img className='z-30 w-[360px] h-[390px] mt-5' src="/public/images/sunflower.png" alt="" />
            <img className='z-20 absolute  w-[410px] h-[420px]' src="/public/images/purple.png" alt="" />
            <img className='z-10 absolute top-[100px] h-[500px]' src="/public/images/stick.png" alt="" />
        </div>
    )
}

export default Flower