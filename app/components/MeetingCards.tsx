"use client"
import Image from 'next/image'
import React from 'react'
import Card from './Card'

const MeetingCards = () => {
  return (
    <section className=' grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>


        <Card color={'#FF742E'} img='/plus.svg' title='New Meeting' description='Setup a new meeting' handleClick={""}/>
        <Card color={'#0E78F9'} img='/plus.svg' title='Join Meeting' description='via invitaion link' handleClick={""}/>
        <Card color={'#830EF9'} img='/plus.svg' title='Schedule Meeting' description='Plan your meeting' handleClick={""}/>
        <Card color={'#F9A90E'} img='/plus.svg' title='View Recordings' description='Meeting recordings' handleClick={""}/>
        
    </section>
  )
}
export default MeetingCards