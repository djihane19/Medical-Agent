
import { UserButton } from '@clerk/nextjs';
import { div } from 'motion/react-client';
import Image from 'next/image';
import React from 'react'

 const menuOptions =[
       { id: 1, name: 'Home', path: '/home',},
       { id: 2, name: 'History', path: '/history',},
       { id: 3, name: 'Pricing', path: '/pricing',},
       { id: 4, name: 'Profile', path: '/profile',},

        
    ]
function AppHeader() {
   
  return (
    <div className='flex gap-5 items-center justify-between p-5 shadow px-10 md:px-20 lg:px-40  '>
        <div className='flex items-center gap-1 '> <Image src={'/logo.svg'} alt="logo-image" width={50} height={30} /> 
        <span className='font-bold'>Diagno<span style={{ color: '#d24545ff' }}>A</span>i</span> 
        </div>

        <div className="hidden md:flex gap-12 items-center justify-between ">
            {menuOptions.map((option,index)=>(
                <div key={index}>
                    <h2 className=' hover:text-blue-500 hover:font-bold cursor-pointer transition-all text-sm font-medium text-gray-900 dark:text-gray-100'>{option.name}</h2>
                </div>
            ))}
        </div>
        <UserButton/>
    </div>
  )
}

export default AppHeader
