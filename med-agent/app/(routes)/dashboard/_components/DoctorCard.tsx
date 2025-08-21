import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export type doctorAgent = {
    id: number,
    specialist: string,
    description: string,
    image: string,
    agentPrompt: string
}

function DoctorCard({ doctor }: { doctor: doctorAgent }) {
  return (
    <div className=' '>
      <Image src={doctor.image} alt={doctor.specialist} width={250} height={200}   className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 transition-transform duration-300' />
      <h2 className='font-bold  mt-1'>{doctor.specialist}</h2>
      <p className='line-clamp-2 text-sm text-gray-500'>{doctor.description}</p>
      <Button  className='mt-2 w-full'>Start Consultation <ArrowRight /></Button>
    </div>
  )
}

export default DoctorCard
 