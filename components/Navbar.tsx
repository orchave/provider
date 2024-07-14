"use client"
import React, { useEffect } from 'react'
import {
    DynamicWidget,
  } from "@dynamic-labs/sdk-react-core";
import {useRouter,usePathname} from "next/navigation"
import Image from 'next/image';
import Logo from "@/app/assets/logo.svg" 

const Navbar = () => {
    const router =  useRouter()
    const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-[#121212] flex justify-between items-center p-4 shadow-lg z-50 text-white">
        <div className='w-full h-full flex justify-around items-center gap-x-10'>
        <Image
            src={Logo}
            alt="logo"
            width={92}
            height={56}
            className="h-full z-50"
          />
    <div className='flex gap-x-[22px] '>
            <div className='flex gap-x-[35px] '>
            <button onClick={() => {
        router.push("/publish");
      }} className='font-normal text-sm'>Publishdata</button>
      </div>
      <div className="w-[150px]">
       <DynamicWidget  innerButtonComponent={"Connect Wallet"} buttonClassName='custom-buttom'/> 
      </div>
      </div>

        </div>
    </nav>
  )
}

export default Navbar