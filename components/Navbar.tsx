import { SignInButton, UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Bird } from 'lucide-react';

const Navbar = () => {

  const {userId} = auth();

  return (
    <div className='z-50 fixed top-8 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between w-11/12 sm:w-1/2 rounded-full backdrop-blur-xl border border-1 border-purple-500/10 backdrop-filter bg-purple-900/10 px-6 py-2 items-center'>
        <Link href={'/'} className='flex justify-between items-center select-none'>
            <Image src="/Logo.png" alt="logo" className='' width={54} height={30}/>
            <h1 className=' text-2xl font-sans'>ostGenie</h1>
        </Link>
        <div className='flex gap-5 items-center justify-end'>
            { userId ? 
              (
              <>
              <Link href='/App'>
                <Button variant={'default'}>
                  <Bird className='mr-2 h-5 w-5' />TweetAi
                </Button>
              </Link>
              <UserButton afterSignOutUrl='/' />
              </>
              )
              :
             (
              <>
                <Link href={'/pricing'} className=' from-stone-950 transition duration-200 dark:text-white'>
                  Pricing
                </Link>
                <Button variant={'default'}>
                  <SignInButton afterSignInUrl='/'/>
                </Button>
              </>
             )
            }
        </div>
    </div>
  )
}

export default Navbar