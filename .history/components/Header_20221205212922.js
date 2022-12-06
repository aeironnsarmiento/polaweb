import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    } from "@heroicons/react/outline";

function Header() {
  return (
    <div>
        <div className='flex justify-between bg-white max-w-6xl'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image src='https://i.imgur.com/iKjNKhz.png' layout='fill' objectFit='contain'/>
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
            <Image src='https://i.imgur.com/0CE7jHL.png' layout='fill' objectFit='contain'/>
        </div>

        {/* Center */}
        <div className='mt-1 p-3 rounded-md'>
        <input type='text' placeholder='Search' className='bg-gray-100 text-sm text-gray-600 placeholder-gray-400 rounded-full h-12 w-64 pl-5 focus:border-black'/>
        </div>
        
        {/* Right */}
        </div>
    </div>
  )
}

export default Header