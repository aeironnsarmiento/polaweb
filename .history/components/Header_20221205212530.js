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
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
            <input 
            className='bg-gray-50 block w-full pl-10'
            type='text'
            placeholder='Search'
            />
        </div>
        
        {/* Right */}
        </div>
    </div>
  )
}

export default Header