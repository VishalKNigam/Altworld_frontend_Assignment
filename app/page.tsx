'use client'
import React from 'react'
import { HiPencil } from "react-icons/hi2";

import ProgressBar from "@ramonak/react-progress-bar";
import { FaHome } from "react-icons/fa";
import { CiBoxes } from "react-icons/ci";
import Image from 'next/image';
import { BiMinus } from "react-icons/bi";
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
        <div className="md:w-1/6 bg-gray-100 p-2 md:ml-8 md:mr-8">
          <div className="my-6 flex">
            <CiBoxes className='mx-2 text-[18px]' />
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

        <div className="md:w-2/6 bg-gray-100 p-2 mt-1">
          <div className='my-2'>
            <span className='text-gray-400'>Pages <span className='text-black'>/Assignment</span></span>
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
            <div className='my-1'>
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
                      Sourav
                    </h3>
                    <p className='text-[10px] text-gray-500'>sourrav@gmail.com</p>
                  </div>
                </div>
                <div className='flex justify-end text-right w-full align-middle'>
                  <h2 className='text-green-500 font-semibold'>
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
        <div className="md:w-4/6 h-4/5 flex mt-20 md:mr-8 rounded-md bg-[#E1DDD3]">
          <div className='w-1/2 flex flex-col bg-white p-2 rounded-md'>
            <div className='flex justify-between'>
              <div className='flex' >
                <Image src={"/profile.jpg"} alt='alt' width={50} height={40} className='rounded-md mr-2' />
                <div className='flex flex-col mx-1'>
                  <h3 className='font-bold md:text-[14px] text-[10px]'>
                    Sourav
                  </h3>
                  <p className='text-[10px] lg:text-[14px] md:text-[12px] text-gray-500 font-[350] '>saurav@gmail.com</p>
                </div>
              </div>
              <h1 className='text-[#4fd1c5] text-[12px] md:text-[15px] lg:text-[15px] font-bold bg-center'>78%</h1>
            </div>
            <div className='flex'>
              <div className='w-1/2 flex flex-col'>
                <span className='text-[12px] mt-3 text-gray-500'>Behavioural</span>
                <span className='text-[12px] mt-1 text-gray-500'>Communication</span>
                <span className='text-[12px] mt-1 text-gray-500'>Situation handling</span>
              </div>
              <div className='w-full md:w-2/3'>
                <ProgressBar completed={80} className='w-full mt-4' height='14px' bgColor='#2EB44E' />
                <ProgressBar completed={70} className='w-full mt-2' height='14px' bgColor='#2EB44E' />
                <ProgressBar completed={60} className='w-full mt-2' height='14px' bgColor='#EBAA28' />
              </div>


            </div>
            <div>
              <h2 className='font-bold mt-1 mb-1 text-[12px] lg:text-[15px] lg:mt-2'>
                About
              </h2>
              <p className='text-[8px] lg:text-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-1 mb-1 text-[12px] lg:text-[15px] lg:mt-2'>
                Experience
              </h2>
              <p className='text-[8px] lg:text-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-1 mb-1 text-[12px] lg:text-[15px] lg:mt-2'>
                Hobbies
              </h2>
              <p className='text-[8px] lg:text-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div>
              <h2 className='font-bold mt-1 mb-1 text-[12px] lg:text-[15px] lg:mt-2'>
                Introduction
              </h2>
              <p className='text-[8px] lg:text-[10px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
            </div>
            <div className='flex justify-center mt-3'>
              <button className='bg-teal-400 text-white rounded-md md:py-1 text-xs font-semibold lg:w-40 md:w-25 w-20 md:h-6 h-4'>
                SHORTLIST
              </button>
            </div>
          </div>
          <div className='w-1/2 b-2px-solid-red pb-2 mb-5 pt-10'>
            <div className='p-0 h-full mt-4'>
              <div className="h-full pb-14">
                <video className="h-full w-full" controls
                poster='https://t4.ftcdn.net/jpg/04/55/59/35/240_F_455593519_78slhuHpZADgxSF3FBUFxJoPVEp3QWLu.jpg'>
                  <source src="/introduction.mp4" type="video/mp4" />
                </video>

              </div>

            </div>



          </div>

        </div>
      </div>
    </div>
  )
}

export default page
