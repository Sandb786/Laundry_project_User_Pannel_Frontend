import React from 'react'
import { Button, Typography } from "@material-tailwind/react";


export default function Order_Info({ order, openModify, openCancel }) {
    return (
        <>
            {/* ========== Order Status ========== */}
            <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center border-b border-gray-400 pb-4">
                <Typography variant="h6" className="font-semibold text-gray-700">
                    Order Status
                </Typography>
                <div className="mt-2 sm:mt-0">
                    <Typography
                        variant="small"
                        className={`border p-1 px-3 rounded-md font-semibold text- shadow-md
                                    ${order.status === 'Pending'
                                ? 'text-yellow-600 border-yellow-600' // Pending: Yellow
                                : order.status === 'Rady for PickedUp'
                                    ? 'text-blue-700 border-blue-700' // Picked Up: Blue
                                    : order.status === 'In Process'
                                        ? 'text-teal-700 border-teal-700' // In Process: Purple
                                        : order.status === 'Delivered'
                                            ? 'text-green-700 border-green-700' // Delivered: Green
                                            : order.status === 'Cancelled'
                                                ? 'text-red-600 border-red-600' // Cancelled: Red
                                                : 'text-gray-600 border-gray-600' // Default for unknown status
                            }`}
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

            {/* ========== Remark Section ========== */}
            {order.remark && (
                <div>
                    <Typography variant="h6" className="font-semibold mb-4 text-gray-700 border-b border-gray-400 pb-2">
                        Remark
                    </Typography>
                    <Typography className="text text-gray-800">
                        {order.remark}
                    </Typography>
                </div>
            )}

            {/* ========== Action Buttons ========== */}
            {!(order.status === 'Cancelled' || order.status === 'Delivered') && (
                <div className="pt-4 flex flex-wrap gap-3 justify-center mb-5">

                    <Button onClick={() => openModify(true)} className="bg-gradient-to-tr from-cyan-700 to-cyan-500 text-white px-5 py-2 rounded-lg text-sm shadow-lg ">
                        Modify Order
                    </Button>

                    <Button onClick={() => openCancel(true)} className="bg-gradient-to-tr from-slate-800 to-slate-700 text-white px-5 py-2 rounded-lg text-sm shadow-lg">
                        Cancel Order
                    </Button>

                </div>
            )}





        </>
    )
}
