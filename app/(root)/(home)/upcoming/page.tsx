import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <div className=' text-white font-bold text-2xl flex flex-col gap-2'>Upcoming
      <div>
      <CallList type='upcoming'/>
      </div>
    </div>
  )
}

export default Upcoming