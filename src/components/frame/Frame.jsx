
import Countdown from "../countdown/Countdown";

const Frame = () => {

  const targetDate = new Date('2024-01-07T21:00:00');
  return (
    <div>
      <div className='fixed flex items-center justify-center top-7 left-8 gap-2'>
        <div className='animate-pulse bg-red-500 h-2 w-2 rounded-full'></div>
        <Countdown targetDate={targetDate} />
      </div>

      <div className='fixed border-t-[1px] border-r-[1px] border-gray-500 h-10 w-10 top-4 right-4'></div>
      <div className='fixed border-t-[1px] border-l-[1px] border-gray-500 h-10 w-10 top-4 left-4'></div>
      <div className='fixed border-b-[1px] border-l-[1px] border-gray-500 h-10 w-10 bottom-4 left-4'></div>
      <div className='fixed border-b-[1px] border-r-[1px] border-gray-500 h-10 w-10 bottom-4 right-4'></div>

      <div className='absolute w-full border-t border-gray-700 top-1/4'></div>
      <div className='absolute w-full border-t border-gray-700 top-3/4'></div>
      <div className='absolute h-full border-l border-gray-700 left-1/4'></div>
      <div className='absolute h-full border-l border-gray-700 left-3/4'></div>
    </div>
  )
}

export default Frame