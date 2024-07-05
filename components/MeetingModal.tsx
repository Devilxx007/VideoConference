import React, { ReactNode } from 'react'
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

interface props{
  title: string,
  buttontext?:string,
  isOpen:boolean;
  onClose:()=>void;
  children?:ReactNode;
  handleClick?:()=>void;
  image?:string;
  buttonIcon?:string;
}
const MeetingModal = ({title,buttontext,isOpen,onClose,children,handleClick,image,buttonIcon}:props) => {
  return (
  <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className=' flex flex-col w-full max-w-[520px] gap-6 border-none bg-dark-1'>
    <div className=' flex flex-col justify-center gap-4'>
      {
        image && (<div className=' flex justify-center'>
          <Image src={image} alt='' width={72} height={72}/>
        </div>)
      }
      <h1 className=' text-white text-center font-bold text-[30px]'>{title}</h1>

      {children}

      <Button onClick={handleClick} className=' bg-blue-600 text-lg text-white focus-visible:ring-0 focus-visible:ring-offset-0'>
        {
          buttonIcon && (
            <div>
              <Image src={buttonIcon} alt='' width={72} height={72}/>
            </div>
          )
        }
        {buttontext}
      </Button>
    </div>
    
  </DialogContent>
</Dialog>

  )
}

export default MeetingModal