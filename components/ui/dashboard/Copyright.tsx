import React from 'react'
import { Unbounded } from 'next/font/google'

const un = Unbounded({weight:["400","500"], subsets : ["latin"]})
const Copyright = () => {
  return (
    <div className={`text-[#525866] ${un.className}`}>
        build with <span className='text-black'>wagmigg-com</span>
    </div>
  )
}

export default Copyright