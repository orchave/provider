"use client";
import Image from 'next/image';
import React,{useState} from 'react'
import {useRouter} from "next/navigation"

import  Icon  from "@/app/assets/value.svg"
import Background from "@/app/assets/background.svg"
import { DataType } from '../types/data';


const Home = () => {
  const [detailPage, setDetailPage] = useState<boolean>(false)
  const dummyData = [
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    },
    {
      address: "0x1f9090aa...8e676c326",
      time: "23 minutes ago",
      title: "Weather Data",
      value: 999,
      eth: "0.0002 ETH"
    }
  ];

  return (
   <div className='relative min-h-screen mb-10'>  
      <Image
            src={Background}
            alt="search"
            width={1783}
            height={1783}
            className="min-h-screen z-10 top-4 fixed"
          />
    <div className='mx-10 my-5 flex flex-col justify-center items-center text-sm gap-4 text-inherit'>
      {dummyData.map((data, index) => (
          <button  key={index} className="px-10 gap-5 flex justify-between items-center p-4 bg-[#272727] w-[982px] h-[52px] rounded-[30px] z-30">
  <div className='flex gap-x-3 justify-center items-center'>
            <h1 className=" font-normal text-white text-sm">{data.title}</h1>
            <h1 className=" font-normal text-white text-[10px]">{data.time}</h1>
            </div>
            <p className=" text-white text-sm">{data.address}</p>

  
            <h1 className=" font-bold bg-[#424242] text-[#c7c5c5] flex justify-center items-center gap-3 rounded-[45px] px-3 py-2 text-sm">    <Image
            src={Icon}
            alt="search"
            width={15}
            height={15}
            className="h-full"
          />{data.value}</h1>
            <p className=" text-[#ceffd1] text-sm">{data.eth}</p>



      
            </button>
      ))}
    </div>
    </div>

  )
}

export default Home