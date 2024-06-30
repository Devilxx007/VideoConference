import MeetingCards from '@/app/components/MeetingCards';
import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US',
    {hour: '2-digit',minute: '2-digit'}
  )

  const date = (new Intl.DateTimeFormat('en-US',{dateStyle:"full"})).format(now);
  return (
    <div className=' flex size-full flex-col gap-10'>
      <div className=' h-[300px] w-full bg-[#1F2339] rounded-[20px]'>

        <div className=' flex flex-col h-full justify-between w-full px-5 pt-5'>
          <h2 className=' text-white font-[400px] text-[16px]'>Upcoming Meeting at : 12:30 PM </h2>

          <div className=' flex flex-col items-start gap-2 py-4'>
          <h1 className=' text-white font-bold text-[72px] max-sm:text-[30px]'>{time}</h1>

          <div className=' flex'>
            <h2 className=' text-white text-[24px] font-semibold'>{date}</h2>
          </div>
          </div>
        </div>
      </div>
      <MeetingCards/>
    </div>
  )
}

export default Home