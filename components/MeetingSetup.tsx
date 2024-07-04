"use client"
import { useGetCallById } from '@/hooks/useGetCallById'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ( {setIsSetupComplete} : {setIsSetupComplete : (value:boolean)=>void}) => {
  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false)

  const call = useCall();

  if(!call){
    throw new Error("Render call inside Stream Component")
  }

  useEffect(()=>{
    if(isMicCamToggledOn){
      call?.camera.disable();
      call?.microphone.disable()
    }else{
      call?.camera.enable();
      call?.microphone.enable();
    }
  },[isMicCamToggledOn,call?.microphone,call?.camera])
  return (
    <div className=' flex flex-col h-screen w-full gap-3 items-center justify-center'>
      <h1 className=' text-white text-2xl font-bold'>Setup</h1>
      <VideoPreview />
      <div className="flex flex-row h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium text-white">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setisMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings/>
      </div>
      <div>
          <Button onClick={()=>{
            call.join()
            setIsSetupComplete(true)
            }} className=' bg-green-500 px-6 py-6 text-lg font-semibold'>Join Meeting</Button>
        </div>
    </div>
  )
}

export default MeetingSetup