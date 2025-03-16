import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function ImageCard() 
{
  const [index, setIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 mt-22">
      <div className="relative h-60 md:h-80 max-w-full mx-auto overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            className="w-full md:h-[400px] object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
