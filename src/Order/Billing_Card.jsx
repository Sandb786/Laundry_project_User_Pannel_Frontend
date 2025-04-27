import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function Billing_Card({ order }) {
  const prices = {
    Shirt: 50,
    Pants: 70,
    Jacket: 100,
  };

  // Convert clothes to items with price
  const items = order.clothes?.map(item => ({
    name: item.type,
    quantity: item.quantity,
    price: prices[item.type] || 0,
  })) || [];

  // Total cost
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    // Use .map() ➔ if you want to create a new array
    // Use .reduce() ➔ if you want to create a final value

  // Format the date to "25 April 2025"
  
      const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
      // 'en-GB' means: British English style → Day Month Year.
      // day: '2-digit'	    Always 2 digits for day	          01, 02, ....25
      // month: 'long'	    Full month name (not number)	    April, May, June
      // year: 'numeric'  	Full 4-digit year	                2025

  return (
    <div className='w-full bg-gray-100 p-10 shadow-lg rounded-2xl md:mb-20 md-2'>
      <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'>Payment Summary</h2>

      <div className='flex flex-col bg-white p-5 rounded-md shadow-sm'>

        <div className='flex justify-between border-b border-dashed border-gray-300 py-3 px-3'>
          <Typography className='font-semibold'>Order ID</Typography>
          <Typography>{order.orderId || "#N/A"}</Typography>
        </div>

        <div className='flex justify-between border-b border-dashed border-gray-300 py-2 px-3'>
          <Typography className='font-semibold'>Service</Typography>
          <Typography>{order.serviceName}</Typography>
        </div>

        <div className='flex justify-between border-b border-dashed border-gray-300 py-2 px-3'>
          <Typography className='font-semibold'>Pickup Time</Typography>
          <Typography>{order.schedule?.time}</Typography>
        </div>
        
        <div className='flex justify-between border-b border-dashed border-gray-300 py-2 px-3'>
          <Typography className='font-semibold'>Pickup Date</Typography>
          <Typography>{formatDate(order.schedule?.date)}</Typography>
        </div>

        {/* You can add delivery date if needed */}
        {/* <div className='flex justify-between border-b border-dashed border-gray-300 py-2 px-3'>
          <Typography className='font-semibold'>Delivery Date</Typography>
          <Typography>{formatDate(order.deliveryDate)}</Typography>
        </div> */}

        <h3 className='text-lg font-semibold mt-6 text-center'>Order Summary</h3>
        {items.map((item, index) => (
          <div key={index} className='flex justify-between border-b border-dashed border-gray-300 py-2 px-3'>
            <Typography>{item.name}</Typography>
            <Typography>{item.quantity} x ₹{item.price}</Typography>
          </div>
        ))}

        <h3 className='text-lg font-semibold mt-6 text-center'>Delivery Charges</h3>
        <div className='flex justify-between border-gray-300 py-2 px-3'>
          <Typography className='font-semibold'>PickUp & Drop</Typography>
          <Typography><span className='line-through text-red-500'>₹ 29</span> 0</Typography>
        </div>

        <div className='flex justify-between border-t font-semibold py-2 px-3 mt-4'>
          <Typography className='text-2xl'>Total</Typography>
          <Typography className='text-green-700 text-2xl'>₹{total}</Typography>
        </div>

      </div>
    </div>
  );
}
