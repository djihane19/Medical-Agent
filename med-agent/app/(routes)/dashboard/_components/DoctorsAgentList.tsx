import { doctors } from '@/shared/list'
import React from 'react'
import DoctorCard from './DoctorCard'

function DoctorsAgentList() {
  return (
    <div className='mt-10 '>
      <h2 className='font-bold text-xl text-center'>Available AI Specialist Doctors</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid=cols=4 xl:grid-cols-5 gap-8 mt-5">
        {doctors.map((doctor, index)=>(
            <div key={index}>
                <DoctorCard doctor={doctor} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsAgentList
