import React from 'react';
import { Typography } from "@material-tailwind/react";

export default function OrderDetail({ order }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header Image */}
        <div className="h-56 sm:h-72  overflow-visible">
          <img 
            src={order.image} 
            alt="Service" 
            className="w-50 h-60 mx-auto object-cover"
          />
        </div>

        {/* Order Details */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Order Type and Status */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <Typography variant="h4" className="font-bold capitalize">
              {order.ordertype}
            </Typography>
            <Typography 
              variant="small"
              className={`border p-1 px-2 rounded-full font-semibold text-xs
                ${order.status === 'Pending' ? 'text-yellow-600 border-yellow-600' :
                  order.status === 'Confirmed' ? 'text-blue-600 border-blue-600' :
                  order.status === 'Picked Up' ? 'text-indigo-600 border-indigo-600' :
                  order.status === 'In Process' ? 'text-purple-600 border-purple-600' :
                  order.status === 'Delivered' ? 'text-green-600 border-green-600' :
                  order.status === 'Cancelled' ? 'text-red-600 border-red-600' :
                  'text-gray-600 border-gray-600'
              }`}
            >
              {order.status}
            </Typography>
          </div>

          {/* Schedule + Pickup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <Typography variant="small" className="font-medium text-gray-500">Scheduled Date:</Typography>
              <Typography variant="small">{order.schedule.date}</Typography>
            </div>
            <div>
              <Typography variant="small" className="font-medium text-gray-500">Scheduled Time:</Typography>
              <Typography variant="small">{order.schedule.time}</Typography>
            </div>
            <div>
              <Typography variant="small" className="font-medium text-gray-500">Pickup/Drop:</Typography>
              <Typography variant="small" className={`${order.pickupDrop === 'Urgent' ? 'text-orange-500' : 'text-green-600'} font-semibold`}>
                {order.pickupDrop}
              </Typography>
            </div>
          </div>

          {/* Clothes List */}
          <div>
            <Typography variant="h6" className="font-semibold mb-2">Clothes Included:</Typography>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              {order.clothes.map((cloth, idx) => (
                <li key={idx}>{cloth.type} — {cloth.quantity} pcs</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons (Optional) */}
          <div className="pt-4 flex gap-3 flex-wrap">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-700 transition">
              Contact Support
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-300 transition">
              Back to Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
