'use client'
import React from 'react'
import { HiPencil } from "react-icons/hi2";

import ProgressBar from "@ramonak/react-progress-bar";
import { FaHome } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";
import Image from 'next/image';

const page = () => {
  const data = [
    { name: "Michael Brown", email: "michael.brown@gmail.com", percentage: 82 },
    { name: "Emily Taylor", email: "emily.taylor@example.com", percentage: 89 },
    { name: "David Martinez", email: "david.martinez@example.com", percentage: 77 },
    { name: "Jessica Davis", email: "jessica.davis@example.com", percentage: 68 },
    { name: "Daniel Wilson", email: "daniel.wilson@example.com", percentage: 95 }
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        <div className="md:w-1/6 bg-gray-100 p-2">
          <div className="my-8 flex">
            <MdOutlineAddHomeWork className='mx-2 text-[18px]' />
            <p className="text-sm font-semibold">Hi, AltWorld</p>
          </div>
          <div className="my-8 flex">
            <FaHome color='#4fd1c5' className='mx-2' />
            <span className="text-sm font-semibold">Dashboard</span>
          </div>
          <div className="my-8 bg-teal-400 text-white p-2 rounded-xl">
            <div className="mb-2">
              <p className='bg-white text-gray-700 w-8 rounded-xl flex justify-center font-semibold text-[14px]'>+</p>
            </div>
            <div className="mb-2">
              <p className="text-[14px] font-semibold">New Assignment?</p>
            </div>
            <div className="mb-2">
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo.</p>
            </div>
            <button className="bg-white rounded-xl text-gray-800 py-1 px-2 text-[12px] font-semibold">Create New Assignment</button>
          </div>
        </div>

        <div className="md:w-2/6 bg-gray-100 p-2">
          <div className='my-2'>
            <span className='text-gray-500'>Pages <span className='text-black'>/Assignment</span></span>
            <h3 className='font-semibold my-1'>sales BDE</h3>
          </div>
          <div className='bg-white p-2 rounded-lg'>
            <div className='flex justify-between'>
              <div className='w-1/2'>
                <h2 className='font-semibold text-lg my-2'>Sales BDE</h2>
                <p className='text-xs my-1 text-gray-700 font-medium'>Assignment Link</p>
                <p className='text-xs my-1 text-gray-700 font-medium'>Assignment Hour </p>
                <p className='text-xs my-1 text-gray-700 font-medium'>Assignment Ends at </p>
              </div>
              <div className='w-1/2 '>
                <div className='flex justify-end  text-xs font-semibold my-2' >
                  <h2 className='mx-1 text-teal-500 font-bold '>Active  </h2><HiPencil className='bg-white rounded-lg shadow-md p-1 w-4 h-4 text-black' />
                </div>
                <div className='flex flex-col justify-end text-right'>
                  <h3 className=' text-xs text-blue-700'>bjhdgjhvc</h3>
                  <p className='my-1 text-xs'>3 hours</p>
                  <p className='my-1 text-xs'>11 march  2024</p>
                </div>
              </div>
            </div>
            <div className='my-4'>
              <button className='mr-2 shadow-md p-1 px-2 rounded-lg font-semibold text-[10px]'>
                TO REVIEW
              </button>
              <button className='shadow-md p-1 px-2 rounded-lg font-semibold text-[10px]'>SHORTLISTED</button>
            </div>
            <div className='flex justify-between my-2'>
              <h3 className=' text-gray-500 text-[10px] font-[400]'>CONDIDATE</h3>
              <h3 className='text-gray-500 text-[10px] font-[400]'>SCORE</h3>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-around bg-slate-100 p-1 rounded-md'>
                <div className='flex'>
                  <Image src={"/profile.jpg"} alt="alt" width={30} height={30} className='mr-2 rounded-lg' />
                  <div className='flex flex-col'>
                    <h3 className='font-[400] text-[12px]'>
                      Sourav singh
                    </h3>
                    <p className='text-[10px] text-gray-500'>sourrav@gmail.com</p>
                  </div>
                </div>
                <div className='flex justify-end text-right w-full align-middle'>
                  <h2 className='text-green-500 font-semibold flex mt-1 '>
                    78%
                  </h2>
                </div>
              </div>
              <div>
                {data.map((item, index) => (
                  <div key={index} className='flex justify-around mt-1'>
                    <div className='flex'>
                      <Image src={"/profile.jpg"} alt="alt" width={30} height={30} className='mr-1 rounded-lg' />
                      <div className='flex flex-col'>
                        <h3 className='font-[400] text-[12px]'>
                          {item.name}
                        </h3>
                        <p className='text-[10px] text-gray-500'>{item.email}</p>
                      </div>
                    </div>
                    <div className='flex justify-end text-right w-full'>
                      <h2 className='text-green-500 font-semibold'>
                        {item.percentage}%
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/6 flex mt-10 rounded-md">
          <div className='w-1/2 flex flex-col bg-white p-2 rounded-md'>
            <div className='flex justify-between'>
              <div className='flex' >
                <Image src={"/profile.jpg"} alt='alt' width={50} height={40} className='rounded-md mr-2' />
                <div className='flex flex-col mx-1'>
                  <h3 className='font-bold text-[14px]'>
                    Sourav Singh
                  </h3>
                  <p className='text-xs text-gray-500 font-[350]'>saurav@gmail.com</p>
                </div>
              </div>
              <h1 className='text-[#4fd1c5] text-base font-bold'>78%</h1>
            </div>
            <div className='flex'>
              <div className='w-1/2 flex flex-col'>
                <span className='text-xs mt-3 text-gray-500'>Behavioural</span>
                <span className='text-xs mt-1 text-gray-500'>Communication</span>
                <span className='text-xs mt-1 text-gray-500'>Situation handling</span>
              </div>
              <div className='w-2/3'>
                <ProgressBar completed={80} className='w-32 mt-4 ' height='6px' bgColor='#4fd1c5' />
                <ProgressBar completed={70} className='w-32 mt-2 ' height='6px' bgColor='#4fd1c5' />
                <ProgressBar completed={60} className='w-32 mt-2 ' height='6px' bgColor='yellow' />
              </div>

            </div>
            <div>
              <h2 className='font-bold mt-3 mb-1 text-[12px]'>
                About
              </h2>
              <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-3 mb-1 text-[12px]'>
                Experience
              </h2>
              <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-3 mb-1 text-[12px]'>
                Hobbies
              </h2>
              <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-3 mb-1 text-[12px]'>
                Introduction
              </h2>
              <p className='text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div className='flex justify-center mt-3'>
              <button className='bg-teal-400 text-white rounded-md py-1 text-xs font-semibold w-32 h-6'>
                SHORTLIST
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page
