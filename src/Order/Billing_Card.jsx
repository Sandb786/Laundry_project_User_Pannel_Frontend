import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function Billing_Card() {
  const orderDetails = {
    orderId: "#12345",
    customerName: "John Doe",
    pickupDate: "March 28, 2025",
    deliveryDate: "April 1, 2025",
    items: [
      { name: "Shirts", quantity: 3, price: 50 },
      { name: "Pants", quantity: 2, price: 70 },
      { name: "Jackets", quantity: 1, price: 100 },
    ],
    total: 220,
    status: "Paid",
  };

  return (
    <div className='w-full bg-gray-100 p-10 shadow-lg rounded-2xl mb-20'>
      <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'>Payment</h2>

      <div className='flex flex-col bg-white p-5 rounded-md shadow-sm'>
        <div className='flex justify-between border-b py-2 px-3'>
          <Typography className='font-semibold'>Order ID</Typography>
          <Typography>{orderDetails.orderId}</Typography>
        </div>
        <div className='flex justify-between border-b py-2 px-3'>
          <Typography className='font-semibold'>Customer</Typography>
          <Typography>{orderDetails.customerName}</Typography>
        </div>
        <div className='flex justify-between border-b py-2 px-3'>
          <Typography className='font-semibold'>Pickup Date</Typography>
          <Typography>{orderDetails.pickupDate}</Typography>
        </div>
        <div className='flex justify-between border-b py-2 px-3'>
          <Typography className='font-semibold'>Delivery Date</Typography>
          <Typography>{orderDetails.deliveryDate}</Typography>
        </div>

        <h3 className='text-lg font-semibold mt-4 text-center'>Order Summary</h3>
        {orderDetails.items.map((item, index) => (
          <div key={index} className='flex justify-between border-b py-2 px-3'>
            <Typography>{item.name}</Typography>
            <Typography>{item.quantity} x ${item.price}</Typography>
          </div>
        ))}

        <div className='flex justify-between border-t font-semibold py-2 px-3 mt-4'>
          <Typography>Total</Typography>
          <Typography>${orderDetails.total}</Typography>
        </div>

        <div className='text-center text-green-600 font-semibold mt-3'>
          <Typography>Status: {orderDetails.status}</Typography>
        </div>
      </div>
    </div>
  );
}
