import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between bg-white max-w-6xl'>
        {/* Left */}
        <div className='relative w-24 '>
            <Image src='https://i.imgur.com/JUFgoM0.jpg' layout='fill' objectFit='contain'/>
        </div>
        {/* Center */}
        
        {/* Right */}
        </div>
    </div>
  )
}

export default Header