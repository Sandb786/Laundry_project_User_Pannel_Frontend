import { Button, Typography } from '@material-tailwind/react'
import { ArrowLeft, PlusCircle, Trash, Minus, Plus } from 'lucide-react'

import React from 'react'
import ClothForm from './ClothForm'
import ScheduleForm from './ScheduleForm'
import Billing_Card from './Billing_Card'
import Submit from './Submit'



export default function Order_Home() 
{
  return (
    <div className='bg-white'>
      <header className='bg-gray-50 sticky z-10 top-0 p-2 py-3 flex gap-5 shadow-sm'>
        <a href="/"> <Button className='text-black p-2'><ArrowLeft /></Button></a>
        <Typography variant='lead' className='text-2xl md:text-3xl'>
          Order Summary
        </Typography>
      </header>

      <div className='p-5 grid gap-10'>
        
        <div className='bg-gray-50 mt-2 p-3 shadow-md border border-gray-300 rounded-2xl flex gap-4'>
          <div className='px-2 p-2 bg-gray-200 w-15 rounded-2xl'>
            <img src="/Color_Laundry/Normal_press.png" alt="" className='w-12' />
          </div>
          <Typography variant='lead'>
            Dry Cleaning
            <Typography variant='small'>
              Price Started At 120/-
            </Typography>
          </Typography>
        </div>


        <div className='grid md:grid-cols-2 gap-6'>

        {/* Clouth Form Component */}
          <ClothForm />

        {/* Scedule order Form Component */}
          <ScheduleForm/>
          
        {/*Billing Component */}
          <Billing_Card/>


        {/* SUbmit form */}
          <Submit/>
          
        </div>
      </div>
    </div>
  )
}






