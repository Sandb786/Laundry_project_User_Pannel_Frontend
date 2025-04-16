import React from 'react'

export default function Submit() {
  return (
    <div className=' p-10 shadow-lg rounded-2xl mb-20'>
      <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'></h2>

      {/* Submit Button */}
      <div className='flex justify-center mt-0'>
        <a href="/">
        <button className='bg-green-700 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300'>
          Order
        </button></a>
      </div>
    </div>
  )
}
