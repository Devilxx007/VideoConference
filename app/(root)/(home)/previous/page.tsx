import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <div className=' text-white font-bold text-2xl flex flex-col gap-2'>
      Previous
      <div>
        <CallList type='ended'/>
      </div>
    </div>
  )
}

export default Previous