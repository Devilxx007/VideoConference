"use client"
import sideBarLinks from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import classNames from 'classnames';
import Image from 'next/image';


const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className=' bg-dark-1 rounded-sm h-screen w-fit sticky left-0 top-0 flex-col max-sm:hidden'>
      
      <div className=' p-5 flex-col mt-10'>
        {sideBarLinks.map((link : any)=>{
          const isActive = pathname === link.route
          return(
            <Link href={link.route} key={link.label} className={classNames('flex items-center justify-start gap-4 rounded-md p-5 m-4 ',{'bg-blue-500':isActive})}>
              <Image
              src={link.imageurl}
              alt={link.label}
              width={24}
              height={24}
              />
              <h1 className=' text-xl font-medium text-white'>{link.label}</h1>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar