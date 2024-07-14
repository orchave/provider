"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Background from "@/app/assets/background.svg";
import { DataType } from '../types/data';
import { useWriteContract } from 'wagmi';

import dealClientAbi from '@/app/abi/dealClient.json';
import Web3 from 'web3';
import CID from 'cids';

const Publish = () => {
  const piece_cid = "baga6ea4seaqkfaz3bbxj7fwqqph43qdfe444ttwldzha5ao2tn6pbiswbplycpi" 
  const cidHexRaw = new CID(piece_cid).toString("base16").substring(1)
  const cidHex = "0x" + cidHexRaw

  const web3 = new Web3("https://rpc.ankr.com/filecoin_testnet")


  const dealRequest = {
    piece_cid: cidHex,//front
    piece_size: 262144, // front
    verified_deal: true,
    label: "Payload cid",//front
    start_epoch: 1500000,//front
    end_epoch: 2500000,//front
    storage_price_per_epoch: web3.utils.toWei("0", "ether"),
    provider_collateral: web3.utils.toWei("0", "ether"),
    client_collateral: web3.utils.toWei("0", "ether"),
    extra_params_version: 1,
    extra_params: {
        location_ref:
            "https://data-depot.lighthouse.storage/api/download/download_car?fileId=b41a11d2-aacc-48c8-903f-7d1f4bdcb268.car",//front
        car_size: 262144, // front
        skip_ipni_announce: true,
        remove_unsealed_copy: true,
    },
}
  const {data:hash, writeContract} = useWriteContract();
  const [values, setValues] = useState<DataType>({
    url: '',
    name: '',
    type: '',
    piece_cid: '',
    piece_size: '',
    payload_cid: '',
    start_apoch: '',
    end_apoch: '',
   location_ref: '',
   car_size: '',
  });

  async function handlePublish(e: React.FormEvent<HTMLFormElement>) { 
    console.log('girdi')
    e.preventDefault() 
    console.log(dealClientAbi)
    console.log(dealRequest)

    const x = writeContract({
      address: '0x159732c26fA5bA0d5C84d5483b62DeFf67a78444',
      abi: dealClientAbi,
      functionName: 'makeDealProposal',
      args: [dealRequest],
    })
    console.log(x)
    console.log('çıktı')
  } 

  const handleChange = (e: any) => {
    const { name, value, options } = e.target;

    if (name === "category") {
      const selectedOptions = Array.from(options)
        .filter((option: any) => option.selected)
        .map((option: any) => option.value);

      setValues({
        ...values,
        category: selectedOptions,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  console.log(values);

  return (
    <form onSubmit={handlePublish} className='relative min-h-screen mb-10 flex flex-col items-center '> 
      <Image
        src={Background}
        alt="background"
        width={1783}
        height={1783}
        className="min-h-screen z-10 top-4 fixed"
      />
      <div className="relative z-20 p-4 flex flex-col justify-start gap-3 w-[600px]">
        <div className='flex justify-center items-center gap-2'>
          <div >
            <label className='text-white text-start mb-1 font-thin'>URL</label>
            <input
              type="text"
              name="url"
              placeholder="https/"
              className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[466px] h-[48px] py-3 px-5"
              value={values.url}
              onChange={handleChange}
            />
          </div>
          <select
            name="type"
            value={values.type}
            onChange={handleChange}
            className="outline-none !text-[#CEFFD1] text-inherit text-sm bg-[#272727] rounded-[47px] w-[127px] h-[48px] p-3 !pr-5 text-center mt-3 flex-1"
          >
            <option value="GET" className='text-[#CEFFD1]'>GET</option>
            <option value="POST" className='text-[#CEFFD1]'>POST</option>
          </select>
        </div>
        <div className='flex justify-center items-center gap-5 w-full'>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Payload Cid</label>
          <input
            type="text"
            name="payload_cid"
            placeholder="payload_cid"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.payload_cid}
            onChange={handleChange}
          />
        </div>
  
        </div>
  
        <div className='flex justify-center items-center gap-5 w-full'>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Piece Cid</label>
          <input
            type="text"
            name="piece_cid"
            placeholder="piece_cid"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.piece_cid}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Piece Size</label>
          <input
            type="text"
            name="piece_size"
            placeholder="piece_size"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.piece_size}
            onChange={handleChange}
          />
        </div>
        </div>
 
        <div className='flex justify-center items-center gap-5 w-full'>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Start Apoch</label>
          <input
            type="text"
            name="start_apoch"
            placeholder="start_apoch"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.start_apoch}
            onChange={handleChange}
          />
               </div>
            <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>End Apoch</label>
          <input
            type="text"
            name="end_apoch"
            placeholder="end_apoch"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.end_apoch}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='flex justify-center items-center gap-5 w-full'>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Location Ref</label>
          <input
            type="text"
            name="location_ref"
            placeholder="https/"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.location_ref}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col  items-start'>
          <label className='text-white text-start mb-1 font-thin'>Car Size</label>
          <input
            type="text"
            name="car_size"
            placeholder="car_size"
            className="outline-none text-white text-inherit mb-2 bg-[#272727] rounded-[47px] w-[280px] h-[48px] py-3 px-5"
            value={values.car_size}
            onChange={handleChange}
          />
        </div>
        </div>
  
        <button
          type="submit"
          className='rounded-[45px] py-[10px] px-6 bg-[#CEFFD1] text-black font-normal flex !justify-center !items-center w-[114px] mt-2'
        >
          Publish
        </button>
{hash && <p>{hash}</p>}
      </div>
    </form>
  );
}


export default Publish;
