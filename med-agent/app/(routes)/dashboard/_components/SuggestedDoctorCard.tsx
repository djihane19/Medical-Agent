import React from 'react'
import { doctorAgent } from './DoctorCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

type props= {
    doctorAgent: doctorAgent,
    setSelectDoctor: any
}

function SuggestedDoctorCard ({ doctorAgent ,setSelectDoctor}: props)  {

    return (
    <div className='flex flex-col items-center border rounded-2xl shadow p-5 cursor-pointer hover:border-blue-800' onClick={()=>setSelectDoctor(doctorAgent) }>
      <Image src={doctorAgent.image}
       alt={doctorAgent.specialist} 
       width={70} 
       height={70}   
       className='w-[50px] h-[50px] object-cover rounded-4xl object-cover' />
       <h2 className='font-bold text-center'>{doctorAgent.specialist} </h2>
       <p className='line-clamp-2 text-sm text-gray-500'>{doctorAgent.description} </p>
       
  
    </div>
  
  )
}

export default SuggestedDoctorCard







