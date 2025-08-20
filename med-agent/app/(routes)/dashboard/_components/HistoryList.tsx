'use client'
import { Button } from '@/components/ui/button';
import { div } from 'motion/react-client';
import Image from 'next/image';
import React,{useState} from 'react'
import AddNewSessionDialog from './AddNewSessionDialog';

function HistoryList() {
    const [historyList,setHistoryList] = useState([]);
  return (
  <div className='mt-5'>
    {historyList.length== 0 ?
     <div className="flex items-center flex-col justify-center p-7 border-2 border-dashed rounded-xl bg-blue-50 dark:bg-gray-800">
          <Image src={'/ma-counter.png'} alt="empty-image" width={150} height={150} />
          <h2 className='font-bold text-xl mt-5'>No history available</h2>
          <p className='text-gray-500'>Your consultation history will appear here.</p>
          <AddNewSessionDialog/>
    </div> :
    <ul>
            {historyList.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
    </ul>
        }
  </div>
  )
}

export default HistoryList
