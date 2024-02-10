import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='z-50 fixed top-8 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between w-11/12 sm:w-1/2 rounded-full backdrop-blur-xl border border-1 border-purple-500/10 backdrop-filter bg-purple-900/10 px-6 py-2 items-center'>
        <Link href={'/'} className='flex justify-between items-center'>
            <img src="/Logo.png" alt="logo" className='w-[3rem]'/>
            <h1 className=' text-2xl font-sans'>ostGenie</h1>
        </Link>
    </div>
  )
}

export default Navbar