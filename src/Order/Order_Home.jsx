import { Button, Typography } from '@material-tailwind/react'
import { ArrowLeft, PlusCircle, Trash, Minus, Plus } from 'lucide-react'
import { useState } from "react";

import React from 'react'



export default function Order_Home() {
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
          {ClothForm()}
          {ScheduleForm()}

          <div className='w-full bg-gray-100 p-10 shadow-lg rounded-2xl mb-20'>
            <h2 className='text-2xl font-semibold text-gray-700 text-center mb-4'>Payment</h2>
            <div className='flex flex-col bg-white p-3 rounded-md shadow-sm'>
              <label className='text-gray-600 font-medium'>Payment Method:</label>
              <select className='p-3 border-b-2 text-lg'>
                <option value=''>Select Payment Method</option>
                <option value=''>Cash On Delivery</option>
                <option value=''>Online Payment</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function ClothForm() {
  const [clothes, setClothes] = useState([{ type: "Shirt", quantity: 2 }, { type: "Pants", quantity: 3 }]);
  const [clothType, setClothType] = useState("");
  const [clothQuantity, setClothQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clothType || !clothQuantity) return;
    setClothes([...clothes, { type: clothType, quantity: parseInt(clothQuantity) }]);
    setClothType("");
    setClothQuantity("");
  };

  const handleRemove = (index) => {
    setClothes(clothes.filter((_, i) => i !== index));
  };

  const handleIncrement = (index) => {
    setClothes(clothes.map((item, i) => i === index ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (index) => {
    setClothes(clothes.map((item, i) => i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <div className="w-full mx-auto mt-2 bg-gray-100 p-10 shadow-lg rounded-2xl md:mb-20">
      <Typography className="text-2xl font-semibold text-gray-700 text-center mb-4">Add Clothes</Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col bg-white p-3 rounded-md shadow-sm">
          <label className="text-gray-600 font-medium">Cloth Type:</label>
          <select
            value={clothType}
            onChange={(e) => setClothType(e.target.value)}
            className="p-3 border-b-2 focus:outline-none text-lg focus:border-b-3 focus:border-cyan-800"
          >
            <option value=""></option>
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
            <option value="Jacket">Jacket</option>
            <option value="Towel">Towel</option>
          </select>
        </div>

        <div className="flex flex-col bg-white p-3 rounded-md shadow-sm">
          <label className="text-gray-600 font-medium">Cloth Quantity:</label>
          <input
            type="number"
            value={clothQuantity}
            onChange={(e) => setClothQuantity(e.target.value)}
            placeholder="Enter quantity"
            className="p-3 border-b-2 focus:outline-none text-lg focus:border-b-3 focus:border-cyan-800"
          />
        </div>

        <button type="submit" className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-medium">
          <PlusCircle size={20} /> Add Cloth
        </button>
      </form>

      <div className="mt-6">
        {clothes.length > 0 && (
          <ul className="bg-gray-50 p-4 rounded-md shadow space-y-3 grid md:grid-cols-2 gap-2">
            {clothes.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm">
                <span className="text-lg font-medium text-gray-800">
                  {item.type} - {item.quantity}
                </span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => handleIncrement(index)} className="text-white bg-green-700 rounded">
                    <Plus size={18} />
                  </button>
                  <button onClick={() => handleDecrement(index)} className="text-white bg-red-600 rounded">
                    <Minus size={18} />
                  </button>
                  <button onClick={() => handleRemove(index)} className="text-orange-600 rounded-md p-1">
                    <Trash size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


function ScheduleForm() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  return (
    <div className="w-full bg-gray-100 p-6 mt-2 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Schedule Order</h2>

      <div className="bg-white p-5 rounded-md shadow-sm">
        <Typography>What would you like your clothes to be picked up?</Typography>

        <div className="grid grid-cols-3 gap-3">
          {[...Array(4)].map((_, i) => 
          {
            const newDate = new Date();
            newDate.setDate(today.getDate() + i);
            return (
              <div
                key={i}
                className="bg-gray-50 p-3 rounded-md shadow-sm text-center mt-5 border-2 border-cyan-800"
              >
                <Typography className="text-cyan-800 font-semibold text-lg">
                  {days[newDate.getDay()]} <br /> {newDate.getDate()}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
