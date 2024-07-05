import CallList from '@/components/CallList'
import React from 'react'

const Recording = () => {
  return (
    <div className=' flex flex-col text-white text-2xl gap-2 font-bold'>Recording
    <div>
      <CallList type='recordings'/>
    </div>
    </div>
  )
}

export default Recording