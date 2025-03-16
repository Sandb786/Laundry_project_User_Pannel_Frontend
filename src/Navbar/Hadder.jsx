import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function Hadder({ laundryName, laundryId, shopInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-50 p-4 shadow-md flex items-center z-10">

      <div className="">
        <h1 className="text-xl font-bold text-gray-800">Mahawat Laundry </h1>
        <span className="text-sm text-gray-600 font-semibold">Laundry ID:<span className="text-cyan-700"> 7879243194 </span><button  onClick={() => setIsOpen(!isOpen)}>▼</button> </span>
      </div>

      <button
        className="ml-auto mr-4 bg-cyan-800 text-white px-5 py-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >

        Info
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-2xs bg-white text-black p-4 shadow-md">
          <Typography>Shop Info Div</Typography>
        </div>
      )}

    </header>
  );
}
