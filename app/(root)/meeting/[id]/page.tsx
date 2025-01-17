'use client';
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded, user } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  useEffect(() => {
    if (call) {
      console.log("Call has been loaded:", call);
    }
  }, [call]); 
  
  if (!isLoaded || isCallLoading) return <Loader />;

  
  if (!call) return null;

  
  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {
            !isSetupComplete ? (<MeetingSetup setIsSetupComplete = {setIsSetupComplete} />) : (<MeetingRoom />)
          }
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
