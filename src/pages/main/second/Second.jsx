import Flower from '../../../components/flower/Flower'
import React from 'react'

const Second = () => {
  return (
    <div className='py-10 h-full'>
      <h1 className='font-bold'>Title</h1>
      <Flower />
      <p className='px-7 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac porta justo. 
        Maecenas id libero at urna sagittis cursus. Integer mattis justo quis nisi ultrices cursus. 
        Vivamus vitae ipsum nisi. Nam suscipit libero sed lorem hendrerit, eu lobortis orci scelerisque.
      </p>
    </div>
  )
}

export default Second