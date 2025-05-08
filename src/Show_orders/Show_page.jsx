import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button, Typography } from '@material-tailwind/react'
import OrderSummary from './OrderSummary'
import List_home from './Order_list/List_home';


export default function Show_page() 
{
  const order = [
    {
      schedule: {
        date: "10-05-2025",
        time: "10 - 11 AM",
      },
      ordertype: "Normal Press",
      pickupDrop: "Normal",
      image: "/Color_Laundry/Normal_press.png",
      clothes: [
        { type: "Shirt", quantity: 3 },
        { type: "Pants", quantity: 2 },
        { type: "Bedsheet", quantity: 1 },
      ],
    },
    {
      schedule: {
        date: "11-05-2025",
        time: "12 - 02 PM",
      },
      ordertype: "Steam Press",
      pickupDrop: "Urgent",
      image: "/Color_Laundry/Steam_press.png",
      clothes: [
        { type: "T-Shirt", quantity: 5 },
        { type: "Jeans", quantity: 1 },
      ],
    },
    {
      schedule: {
        date: "12-05-2025",
        time: "06 - 08 PM",
      },
      ordertype: "Roll Press",
      pickupDrop: "Normal",
      image: "/Color_Laundry/Roll_press.png",
      clothes: [
        { type: "Kurta", quantity: 2 },
        { type: "Pajama", quantity: 2 },
        { type: "Dupatta", quantity: 1 },
      ],
    },
    {
      schedule: {
        date: "13-05-2025",
        time: "08 - 10 PM",
      },
      ordertype: "Dry Cleaning",
      pickupDrop: "Urgent",
      image: "/Color_Laundry/Dry_clean.png",
      clothes: [
        { type: "Blanket", quantity: 1 },
        { type: "Towel", quantity: 4 },
      ],
    },
    {
      schedule: {
        date: "14-05-2025",
        time: "10 - 12 AM",
      },
      ordertype: "Laundry",
      pickupDrop: "Normal",
      image: "/Color_Laundry/Laundry.png",
      clothes: [
        { type: "Saree", quantity: 1 },
        { type: "Shalwar", quantity: 2 },
        { type: "Chadar", quantity: 1 },
      ],
    },
    {
      schedule: {
        date: "14-05-2025",
        time: "12 - 02 PM",
      },
      ordertype: "Normal Press",
      pickupDrop: "Urgent",
      image: "/Color_Laundry/Normal_press.png",
      clothes: [
        { type: "T-Shirt", quantity: 2 },
        { type: "Shorts", quantity: 3 },
      ],
    },
    {
      schedule: {
        date: "15-05-2025",
        time: "10 - 12 AM",
      },
      ordertype: "Steam Press",
      pickupDrop: "Normal",
      image: "/Color_Laundry/Steam_press.png",
      clothes: [
        { type: "Sweater", quantity: 1 },
        { type: "Scarf", quantity: 2 },
      ],
    },
    {
      schedule: {
        date: "15-05-2025",
        time: "02 - 04 PM",
      },
      ordertype: "Dry Cleaning",
      pickupDrop: "Urgent",
      image: "/Color_Laundry/Dry_clean.png",
      clothes: [
        { type: "Curtain", quantity: 4 },
        { type: "Tablecloth", quantity: 2 },
      ],
    },
  ];
  
  
  
  
  
  
 // const order = tempOrder; // Replace with actual order data  
  return (
    <div>

    {/* Header */}
      <header className='bg-white sticky z-10 top-0 p-2 py-3 flex gap-5 shadow-sm'>
        <a href="/"> <Button className='text-black p-2'><ArrowLeft /></Button></a>
        <Typography variant='lead' className='text-2xl md:text-3xl'>
          My Orders
        </Typography>
      </header>

        {/* Orders Section */}
        <section className=''>
          {/* <OrderSummary order={order}/> */}
          <List_home orders={order}/>
        </section>



    </div>
  )
}
