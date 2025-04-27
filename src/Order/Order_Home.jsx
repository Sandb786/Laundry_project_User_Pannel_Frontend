import { Button, Typography } from '@material-tailwind/react'
import { ArrowLeft, PlusCircle, Trash, Minus, Plus } from 'lucide-react'

import React from 'react'
import ClothForm from './ClothForm'
import ScheduleForm from './ScheduleForm'
import Billing_Card from './Billing_Card'
import Submit from './Submit'
import { useParams } from 'react-router-dom'



export default function Order_Home() 
{
  const {serviceId} = useParams()
  const services = [
    { name: "Normal Press", image: "/Color_Laundry/Normal_press.png" },
    { name: "Steam Press", image: "/Color_Laundry/Steam_press.png" },
    { name: "Roll Press (Iron)", image: "/Color_Laundry/Roll_press.png" },
    { name: "Dry-Cleaning", image: "/Color_Laundry/Dry_clean.png" },
    { name: "Stain Remove", image: "/Color_Laundry/Stain_Remove.png" },
    { name: "Laundry", image: "/Color_Laundry/Laundry.png" }
  ];
    const [order, setOrder] = React.useState({serviceName: services[serviceId].name});

  console.log("Order: ", order);

  

  return (
    <div className='bg-white'>
      
      {/* Header */}
      <header className='bg-gray-50 sticky z-10 top-0 p-2 py-3 flex gap-5 shadow-sm'>
        <a href="/"> <Button className='text-black p-2'><ArrowLeft /></Button></a>
        <Typography variant='lead' className='text-2xl md:text-3xl'>
          Order Summary
        </Typography>
      </header>

      <div className='p-5 grid gap-10'>
        
        {/* Service Info Image And Name */}
        <div className='bg-gray-50 mt-2 p-3 shadow-md border border-gray-300 rounded-2xl flex gap-4'>
          <div className='px-2 p-2 bg-gray-200 w-15 rounded-2xl'>
            <img src={services[serviceId].image} alt="" className='w-12' />
          </div>
          <Typography variant='lead'>
            {services[serviceId].name}
            <Typography variant='small'>
              Price Started At 120/-
            </Typography>
          </Typography>
        </div>


        <div className='grid md:grid-cols-2 gap-6'>

        {/* Clouth Form Component */}
          <ClothForm order={order} setOrder={setOrder}/>

        {/* Scedule order Form Component */}
        <ScheduleForm order={order} setOrder={setOrder} />

          
        {/*Billing Component */}
          <Billing_Card order={order}/>


        {/* SUbmit form */}
          <Submit />
          
        </div>
      </div>
    </div>
  )
}






