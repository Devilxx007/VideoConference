"use client"
import React from 'react'
import Image from 'next/image';
interface props {
    img : string;
    title: string;
    description: string;
    handleClick: any;
    color:any;
}
const Card = ({img,title,description,handleClick,color}:props) => {
  return (
    <div onClick={handleClick} className={`bg-[${color}] hover:cursor-pointer px-4 py-6 rounded-[14px] flex flex-col justify-between w-full xl:max-w-[260px] min-h-[260px]`}>

            <div>
                <Image src={img} alt='' width={36} height={36}/>
            </div>

            <div className=' flex flex-col gap-[5px]'>
                <h3 className=' text-white font-[700] text-[24px]'>{title}</h3>

                <h3 className=' text-white font-[400] text-[18px]'>{description}</h3>
            </div>

        </div>
  )
}

export default Card