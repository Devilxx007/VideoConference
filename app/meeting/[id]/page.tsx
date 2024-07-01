"use client"
import MeetingRoom from '@/app/components/MeetingRoom'
import MeetingSetup from '@/app/components/MeetingSetup'
import { useGetCallById } from '@/hooks/useGetCallById'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import Loader from '@/components/ui/Loader'
import React, { useState } from 'react'

const Meeting = ({params:{id}} : {params:{id:string}}) => {
  const {call , isCallLoading} = useGetCallById(id)
  const {user, isLoaded} = useUser() 
  const [complete, setcomplete] = useState(false)

  if(!isLoaded) return <Loader/>
  return (
    <main className=' h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {
            !complete? <MeetingSetup/> : <MeetingRoom/>
          }
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting