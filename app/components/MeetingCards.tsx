"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Card from './Card'
import { useRouter } from 'next/router'
import MeetingModal from './MeetingModal'

const MeetingCards = () => {
  
  const [meetingState, setMeetingState] = useState<'isScheduleMeeting'| 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()
  const createMeeting = ()=>{

  }
  return (
    <section className=' grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      
      <Card color={'#FF742E'} img='/plus.svg' title='New Meeting' description='Setup a new meeting' handleClick={()=>setMeetingState('isInstantMeeting')}/>
      <Card color={'#0E78F9'} img='/plus.svg' title='Join Meeting' description='via invitaion link' handleClick={()=>setMeetingState('isJoiningMeeting')}/>
      <Card color={'#830EF9'} img='/plus.svg' title='Schedule Meeting' description='Plan your meeting' handleClick={()=>setMeetingState('isScheduleMeeting')}/>
      <Card color={'#F9A90E'} img='/plus.svg' title='View Recordings' description='Meeting recordings' handleClick={()=>setMeetingState(undefined)}/>
        
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