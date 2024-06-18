import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap2'>
            <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            {/* <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p> */}
            <button class="w-[150px] bg-white h-[37px] md:block my-3 flex items-center justify-center rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000]">Explore Premium</button>
            {/* <p className='bg-white text-black cursor-pointer py-1 px-3 rounded-2xl text-[15px]'>Install App</p> */}
            <button class="w-[150px] bg-white h-[37px]  my-3 flex items-center justify-center rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#000]">Install App</button>
            <p className='bg-purple-500 text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>D</p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        {/* <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p> */}
        <button class="relative px-4 py-1 rounded-2xl bg-white text-black isolation-auto z-10 border-2 border-[#009b49] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#009b49] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">All</button>
        <button class="relative px-4 py-1 rounded-2xl bg-black isolation-auto z-10 border-2 border-[#009b49] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#009b49] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Music</button>
        <button class="relative px-4 py-1 rounded-2xl bg-black isolation-auto z-10 border-2 border-[#009b49] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#009b49] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Podcasts</button>

      </div>
    </>
  )
}

export default Navbar
