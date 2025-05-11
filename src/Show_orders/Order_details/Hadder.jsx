import React from 'react'
import { Typography } from '@material-tailwind/react'

export default function Hadder({order}) 
{
  return (
    <div>
        <div className='bg-gray-50 mt-2 p-3 shadow-md border border-gray-300 rounded-2xl flex gap-4'>
                 <div className='px-2 p-2 bg-gray-200 w-15 rounded-2xl'>
                   <img src={order.image} alt="" className='w-12' />
                 </div>
                 <Typography variant='lead'>
                    {order.ordertype}
                   <Typography variant='small'>
                     Price Started At 120/-
                   </Typography>
                 </Typography>
               </div>
    </div>
  )
}
