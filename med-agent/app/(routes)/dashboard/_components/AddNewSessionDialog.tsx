'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Loader2 } from 'lucide-react';
import axios from 'axios';
import DoctorCard, { doctorAgent } from './DoctorCard';
import SuggestedDoctorCard from './SuggestedDoctorCard';

function AddNewSessionDialog() {
  const [note, setNote] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [doctors, setDoctors] = useState<doctorAgent>(); // To Store suggested doctors
  const [selectedDoctor, setSelectDoctor] = useState<doctorAgent | undefined>(undefined);

  const OnClickNext = async () => {
    setLoading(true);
    const results = await axios.post('/api/suggest-doctors',{
        notes:note
    });
    console.log(results.data);
    setDoctors(results.data);
    setLoading(false)
  };

  const onStartConsultation= async ()=>{
    //save info to db
    setLoading(true)
    const result = await axios.post('/api/session-chat',{
        notes:note,
        selectedDoctor:selectedDoctor
    })
    console.log(result.data)
    if (result.data?.sessionId){
        console.log(result.data.sessionId);

    }
    setLoading(false)


  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-5">+ Start Consultation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
          {!doctors?
            <div>
              <h2>Add your symptoms or any other relevant information</h2>
              <Textarea
                placeholder="Add Details here..."
                className="mt-2 h-[200px]"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>     
          :<div>
          <h2>Select the doctor</h2>
            <div className='grid grid-cols-3 gap-5 mt-2 sm:grid-col-2' >
                
                
            { //@ts-ignore
            doctors.map((doctor, index) => (<SuggestedDoctorCard doctorAgent={doctor} key={index} setSelectDoctor={()=>setSelectDoctor(doctor) }  selectedDoctor={selectedDoctor} />)            )}
             </div> 
           </div>
          }
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
         
          </DialogClose>

          {!doctors? <Button disabled={!note || loading } onClick={()=> OnClickNext() }>
           Next {loading ? <Loader2 className='anime-spin' />: <ArrowRight />} </Button>
           : <Button disabled={ loading || !selectedDoctor  } onClick={()=>onStartConsultation()}>Start Consultation
           {loading ? <Loader2 className='anime-spin' />: <ArrowRight />}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;