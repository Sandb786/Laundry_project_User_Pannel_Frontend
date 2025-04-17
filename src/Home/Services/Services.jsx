import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() 
{
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // Assuming you're using react-router-dom for navigation

  const services = [
    { name: "Normal Press", image: "/Color_Laundry/Normal_press.png" },
    { name: "Steam Press", image: "/Color_Laundry/Steam_press.png" },
    { name: "Roll Press (Iron)", image: "/Color_Laundry/Roll_press.png" },
    { name: "Dry-Cleaning", image: "/Color_Laundry/Dry_clean.png" },
    { name: "Stain Remove", image: "/Color_Laundry/Stain_Remove.png" },
    { name: "Laundry", image: "/Color_Laundry/Laundry.png" }
  ];

  const handleClick = (index) => 
  {
    setSelected(index === selected ? null : index);
    setTimeout(() => navigate(`/order/${index}`), 300); // Redirect after success
  };

  return (
    <div className="p-5 mb-20">
      <div className="min-h-fit bg-gray-100 border border-white rounded-2xl flex flex-col items-center py-10 w-full">
        <Typography variant="lead" className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Our Services
        </Typography>

        {/* Grid: 2 Columns for Mobile, 3 for Medium+ Screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-lg sm:max-w-xl md:max-w-3xl px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[160px] mx-auto p-4 bg-white border-4 border-white shadow-xl shadow-gray-300 rounded-2xl flex flex-col items-center cursor-pointer"
              onClick={() => handleClick(index)}
              initial={{ scale: 1 }}
              animate={{ scale: selected === index ? 0.85 : 1 }}
              transition={{ type: "spring", stiffness: 800, damping: 10 }}
            >
              <img src={service.image} alt={service.name} className="h-22 w-22 sm:h-24 sm:w-24 mb-3" />
              <Typography className="text-sm font-semibold text-gray-700 text-center">
                {service.name}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
