import React from 'react';
import { Button, Typography } from "@material-tailwind/react";

export default function OrderDetail({ order }) {
    return (
        <div className="bg-gray-100 py-10 px-1 sm:px-8">

            {/* Header Image */}
            <div className="relative h-32 sm:h-48 w-full overflow-visible -mt-10">
                <img
                    src={order.image}
                    alt="Service"
                    className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-0 bg-gray-100/5 flex items-end p-4">
                    <Typography variant="lead" className="text-black font-bold capitalize">
                        {order.ordertype}
                    </Typography>
                </div>
            </div>

            {/* Main Container */}
            <div className="overflow-y-auto pr-2 max-h-[70vh] sm:max-h-[600px] mx-auto bg-white rounded-t-3xl mt-1 px-4 sm:px-6">

                <div className="p-6 sm:p-10 space-y-10">

                    {/* ========== Order Status ========== */}
                    <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center border-b border-gray-400 pb-4">
                        <Typography variant="h6" className="font-semibold text-gray-700">
                            Order Status
                        </Typography>
                        <div className="mt-2 sm:mt-0">
                            <Typography
                                variant="small"
                                className={`border p-1 px-3 rounded-md font-semibold text-xs shadow-md
                                    ${order.status === 'Pending' ? 'text-yellow-700 border-yellow-600 bg-yellow-100' :
                                        order.status === 'Confirmed' ? 'text-blue-700 border-b border-gray-400lue-600 bg-blue-100' :
                                            order.status === 'Picked Up' ? 'text-indigo-700 border-indigo-600 bg-indigo-100' :
                                                order.status === 'In Process' ? 'text-purple-700 border-purple-600 bg-purple-100' :
                                                    order.status === 'Delivered' ? 'text-green-700 border-green-600 bg-green-100' :
                                                        order.status === 'Cancelled' ? 'text-red-700 border-red-600 bg-red-100' :
                                                            'text-gray-700 border-gray-600 bg-gray-100'}`}
                            >
                                {order.status}
                            </Typography>
                        </div>
                    </div>

                    {/* ========== Schedule & Pickup Info ========== */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-4 text-gray-700 border-b border-gray-400 pb-2">
                            Order Schedule
                        </Typography>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text text-gray-700">
                            <div className="space-y-1">
                                <Typography className="font-medium text-gray-500">Scheduled Date</Typography>
                                <Typography>{order.schedule.date}</Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography className="font-medium text-gray-500">Scheduled Time</Typography>
                                <Typography>{order.schedule.time}</Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography className="font-medium text-gray-500">Pickup/Drop Type</Typography>
                                <Typography className={`font-semibold ${order.pickupDrop === 'Urgent' ? 'text-orange-500' : 'text-green-600'}`}>
                                    {order.pickupDrop}
                                </Typography>
                            </div>
                            <div className="space-y-1">
                                <Typography className="font-medium text-gray-500">Delivery Charge</Typography>
                                <Typography>₹ {order.pickupDrop === 'Urgent' ? 30 : 0} /-</Typography>
                            </div>
                        </div>
                    </div>

                    {/* ========== Clothes List ========== */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-4 text-gray-700 border-b border-gray-400 pb-2">
                            Clothes Included
                        </Typography>
                        <ul className="list-disc pl-6 space-y-1 text text-gray-800">
                            {order.clothes.map((cloth, idx) => (
                                <li key={idx}>
                                    {cloth.type} — <span className="font-medium">{cloth.quantity} pcs</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ========== Price Details ========== */}
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
                        <Typography variant="h6" className="font-semibold mb-4 text-gray-700 border-b border-gray-400 pb-2">
                            Price Details
                        </Typography>
                        <div className="text text-gray-700 space-y-3">
                            <div className="flex justify-between">
                                <span>Total Clothes</span>
                                <span className="font-semibold">{order.clothes.reduce((total, cloth) => total + cloth.quantity, 0)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Price</span>
                                <span className="font-semibold text-blue-600">₹ {order.total}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charge</span>
                                <span className="font-semibold text-green-500">₹ {order.pickupDrop === 'Urgent' ? 30 : 0}</span>
                            </div>
                            <div className="flex justify-between border-t border-dashed pt-2 font-medium text-black">
                                <span>Grand Total</span>
                                <span className="font-bold">₹{order.total + (order.pickupDrop === 'Urgent' ? 30 : 0)}</span>
                            </div>
                        </div>
                    </div>

                    {/* ========== Payment Method ========== */}
                    <div>
                        <Typography variant="h6" className="font-semibold mb-4 text-gray-700 border-b border-gray-400 pb-2">
                            Payment Method
                        </Typography>
                        <Typography className="text text-gray-800">
                            {order.paymentMethod || "Cash on Delivery (Default)"}
                        </Typography>
                    </div>

                    {/* ========== Action Buttons ========== */}
                    <div className="pt-4 flex flex-wrap gap-3 justify-center mb-5">

                        {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm shadow-md hover:bg-blue-700 transition">
                            Modify
                        </button> */}
                        <Button variant='bodered' className="bg-gradient-to-tr from-cyan-700 to-cyan-500 text-white px-5 py-2 rounded-lg text-sm shadow-lg ">
                            Modify Order
                        </Button>

                        <Button className="bg-gradient-to-tr from-slate-800 to-slate-700 text-white px-5 py-2 rounded-lg text-sm shadow-lg">
                            Cancel Order
                        </Button>

                    </div>

                    {/* ========== Cancel Reason ========== */}
                    {order.status === 'Cancelled' && order.cancelReason && (
                        <div className="flex flex-wrap justify-center gap-3 p-4 mb-6 rounded-md border border-gray-300 shadow">
                            <Typography variant="h6" className="font-semibold mb-2 text-gray-700 border-b pb-2 ">
                                Reason for Cancellation
                            </Typography>
                            <Typography className="...">
                                {order.cancelReason}
                            </Typography>
                        </div>
                    )}



                </div>
            </div>
        </div>
    );
}
