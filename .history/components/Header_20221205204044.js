import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <h1>Header</h1>

        {/* Left */}
        <div>
            <Image src='https://links.papareact.com/ocw' layout='fill'/>
        </div>
        {/* Center */}
        
        {/* Right */}
    </div>
  )
}

export default Header