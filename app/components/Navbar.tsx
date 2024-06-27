import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
const Navbar = () => {
  return (
    <div className='gap-4 w-full flex flex-row items-center justify-between p-4 bg-dark-1 h-[3.5rem]'>
      <div className=' flex items-center gap-3'>
        <Image
        src={'/video.svg'}
        alt='Logo'
        height={30}
        width={45}
        className=' max-sm:size-10'
        />
        <h1 className=' text-2xl font-bold text-white max-sm:hidden'>Zuum</h1>
      </div>
      <div className=' sm:hidden'>
        <MobileNav/>
      </div> 
    </div>
  )
}

export default Navbar