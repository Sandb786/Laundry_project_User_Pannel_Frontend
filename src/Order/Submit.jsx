import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default function Submit() 
{
  

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'>Order Summary</h2>
      <div className='bg-white p-5 rounded-md shadow-sm'>
        <h3 className='text-lg font-semibold'>Order ID: #123456</h3>
        <p className='text-gray-600'>Your order has been successfully placed!</p>
        <button 
          onClick={() => toast.success("Order placed successfully!")}
          className='mt-4 bg-cyan-800 text-white py-2 px-4 rounded-md'
        >
          Notify Me
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}
