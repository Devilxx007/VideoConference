"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Card from './Card'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, StreamVideoClient, useStreamVideoClient } from '@stream-io/video-react-sdk'

const MeetingCards = () => {
  const router = useRouter();
  const [values, setvalues] = useState({
    datetime: new Date(),
    description: '',
    link:''
  })

  const [callDetails, setcallDetails] = useState<Call>()
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting'| 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const {user } = useUser();
  const client = useStreamVideoClient()
  const createMeeting = async ()=>{
    if(!client || !user) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call('default',id)
      
      if(!call) throw new Error ("Failed to call")

      const startsAt = values.datetime.toISOString() || new Date(Date.now()).toISOString
      const description = values.description || "Instant Meeting"
      
      await call.getOrCreate({
        data:{
          starts_at:startsAt,
          custom:{
            description
          }
        }
      })

      setcallDetails(call)

      if(!values.description){
        router.push(`/meeting/${call.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className=' grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      
      <Card classname='bg-[#FF742E]' img='/plus.svg' title='New Meeting' description='Setup a new meeting' handleClick={()=>setMeetingState('isInstantMeeting')}/>
      <Card classname='bg-[#0E78F9]'  img='/plus.svg' title='Join Meeting' description='via invitaion link' handleClick={()=>setMeetingState('isJoiningMeeting')}/>
      <Card classname='bg-[#830EF9]'  img='/plus.svg' title='Schedule Meeting' description='Plan your meeting' handleClick={()=>setMeetingState('isScheduleMeeting')}/>
      <Card classname='bg-[#F9A90E]'  img='/plus.svg' title='View Recordings' description='Meeting recordings' handleClick={()=>setMeetingState(undefined)}/>
        
        <MeetingModal
        isOpen = {meetingState === 'isInstantMeeting'}
        onClose = {()=> setMeetingState(undefined)}
        title = 'Start an Instant Meeting'
        buttontext = 'Start Meeting'
        handleClick = {createMeeting}
        />
    </section>
  )
}
export default MeetingCards