import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function Services() {
  const services = [
    { name: "Normal Press ", image: "/Color_Laundry/Normal_press.png" },
    { name: "Steam Press", image: "/Color_Laundry/Steam_press.png" },
    { name: "Roll Press (Iron)", image: "/Color_Laundry/Roll_press.png" },
    { name: "Dry-Cleaning", image: "/Color_Laundry/Dry_clean.png" },
    { name: "Stain Remove", image: "/Color_Laundry/Stain_Remove.png" },
    { name: "Laundry", image: "/Color_Laundry/Laundry.png" }
  ];

  return (
    <div className='p-5  mb-15'>
      
      <div className='min-h-fit bg-gray-100 border-1 border-white rounded-2xl flex flex-col items-center py-10'>

        <Typography variant='lead' className='text-3xl font-bold text-gray-800 mb-6'>Our Services</Typography>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>

          {services.map((service, index) => (

            <div key={index} className='w-48 p-4 bg-white border-4 border-white shadow-xl shadow-gray-300 rounded-2xl flex flex-col items-center transition-transform cursor-pointer'>
              <img src={service.image} alt={service.name} className='h-24 w-24 mb-3' />
              <Typography className='text-lg font-semibold text-gray-700 text-center'>{service.name}</Typography>
            </div>

          ))}

        </div>
      </div>

    </div>
  );
}
