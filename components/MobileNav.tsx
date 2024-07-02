"use client"
import React from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import sideBarLinks from '@/constants'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import Link from 'next/link'
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <div>
      <Sheet>
  <SheetTrigger asChild>
    <Image src={'/hamburger.svg'} width={20} height={20} alt='Logo'/>
  </SheetTrigger>
  <SheetContent side={'left'} className=' bg-dark-2 border-none' >
    <div className=' flex flex-row gap-4 items-center'>
      <Image src={'/video.svg'} alt='Logo' width={45} height={35}/>
      <h1 className=' text-white text-md font-bold'>Zuum</h1>
    </div>

    <div className=' h-screen flex flex-col items-start'>
      <SheetClose asChild>
        <div className=' flex flex-col w-full p-2'>
        {sideBarLinks.map((link : any)=>{
          const isActive = pathname === link.route
          return(
            <SheetClose key={link.route} asChild>
              <Link href={link.route} key={link.label} className={classNames('flex items-center justify-start gap-4 rounded-md p-5 m-4 ',{'bg-blue-500':isActive})}>
              <Image
              src={link.imageurl}
              alt={link.label}
              width={20}
              height={20}
              />
              <p className=' text-md font-semibold text-white'>{link.label}</p>
            </Link>
            </SheetClose>
          )
        })}
        </div>
      </SheetClose>
    </div>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNav