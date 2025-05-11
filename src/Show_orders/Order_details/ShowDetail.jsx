import React from 'react';
import { Typography } from "@material-tailwind/react";

export default function OrderDetail({ order }) {
    return (

        <div className=" bg-gray-100 py-10 px-1 sm:px-8 ">

                {/* Header Image */}
                <div className="relative h-32 sm:h-48 w-full overflow-visible -mt-10 ">
                    <img
                        src={order.image}
                        alt="Service"
                        className="w-full h-full object-contain  p-2 "
                    />
                    <div className="absolute inset-0 bg-gray-100/5 flex items-end p-4">
                        <Typography variant="lead" className="text-black font-bold capitalize">
                            {order.ordertype}
                        </Typography>
                        
                    </div>
                </div>

            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-t-3xl overflow-hidden mt-1">

                {/* Order Details */}
                <div className="p-6 sm:p-10 space-y-6">
                    {/* Status Badge */}
                    <div className="flex justify-end">
                        <Typography
                            variant="small"
                            className={`border p-1 px-3 rounded-full font-semibold text-xs shadow-md
                ${order.status === 'Pending' ? 'text-yellow-700 border-yellow-600 bg-yellow-100' :
                                    order.status === 'Confirmed' ? 'text-blue-700 border-blue-600 bg-blue-100' :
                                        order.status === 'Picked Up' ? 'text-indigo-700 border-indigo-600 bg-indigo-100' :
                                            order.status === 'In Process' ? 'text-purple-700 border-purple-600 bg-purple-100' :
                                                order.status === 'Delivered' ? 'text-green-700 border-green-600 bg-green-100' :
                                                    order.status === 'Cancelled' ? 'text-red-700 border-red-600 bg-red-100' :
                                                        'text-gray-700 border-gray-600 bg-gray-100'
                                }`}
                        >
                            {order.status}
                        </Typography>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
                        <div className="space-y-1">
                            <Typography className="font-medium text-gray-500">Scheduled Date</Typography>
                            <Typography>{order.schedule.date}</Typography>
                        </div>
                        <div className="space-y-1">
                            <Typography className="font-medium text-gray-500">Scheduled Time</Typography>
                            <Typography>{order.schedule.time}</Typography>
                        </div>
                        <div className="space-y-1">
                            <Typography className="font-medium text-gray-500">Pickup/Drop</Typography>
                            <Typography className={`font-semibold ${order.pickupDrop === 'Urgent' ? 'text-orange-500' : 'text-green-600'}`}>
                                {order.pickupDrop}
                            </Typography>
                        </div>
                    </div>

                    {/* Clothes List */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-2">Clothes Included</Typography>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
                            {order.clothes.map((cloth, idx) => (
                                <li key={idx}>{cloth.type} — <span className="font-medium">{cloth.quantity} pcs</span></li>
                            ))}
                        </ul>
                    </div>
                    {/* Clothes List */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-2">Clothes Included</Typography>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
                            {order.clothes.map((cloth, idx) => (
                                <li key={idx}>{cloth.type} — <span className="font-medium">{cloth.quantity} pcs</span></li>
                            ))}
                        </ul>
                    </div>
                    {/* Clothes List */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-2">Clothes Included</Typography>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
                            {order.clothes.map((cloth, idx) => (
                                <li key={idx}>{cloth.type} — <span className="font-medium">{cloth.quantity} pcs</span></li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap gap-3 justify-end">
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:bg-blue-700 transition">
                            Contact Support
                        </button>
                        <button className="bg-gray-200 text-red-500 px-5 py-2 rounded-lg text-sm shadow-md font-bold ">
                            Cancel Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
