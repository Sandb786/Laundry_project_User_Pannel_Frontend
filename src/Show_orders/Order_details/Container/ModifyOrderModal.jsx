import React, { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

export default function ModifyOrderModal({ order, Close }) 
{
    const [scheduleDate, setScheduleDate] = useState(order.schedule.date || '');
    const [scheduleTime, setScheduleTime] = useState(order.schedule.time || '');
    const [remark, setRemark] = useState(order.remark || '');

    const handleSave = () => 
    {
        const modifiedOrder = {
            ...order,
            schedule: {
                date: scheduleDate,
                time: scheduleTime
            },
            remark: remark,
            clothCount: order.clothCount,
            clothType: order.clothType
        };
        //onSave(modifiedOrder);
    };
// Handle quantity change for clothes
    const handleClothQuantityChange = (idx, quantity) => 
        {
        const updatedClothes = [...modifiedOrder.clothes];
        updatedClothes[idx].quantity = quantity;
        setModifiedOrder({
            ...modifiedOrder,
            clothes: updatedClothes
        });
    };

    // Remove a cloth item
    const handleRemoveCloth = (idx) => {
        const updatedClothes = order.clothes.filter((_, i) => i !== idx);
        setModifiedOrder({
            ...modifiedOrder,
            clothes: updatedClothes
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-6 overflow-y-auto max-h-[90vh]">

                {/* Modal Title */}
                <div className="border-b pb-4">
                    <Typography variant="h5" className="text-cyan-700 font-bold">
                        Modify Order Schedule
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                        You can update the schedule and add remarks here.
                    </Typography>
                </div>

                {/* Schedule Inputs */}
                <div className="grid grid-cols-2 gap-6">

                    <div className="space-y-1">
                        <Typography className="text-gray-600 font-medium">Delivery Date</Typography>
                        <input
                            type="date"
                            value={scheduleDate}
                            onChange={(e) => setScheduleDate(e.target.value)}
                            className="p-2 border-b-2 text-gray-600 focus:text-black focus:outline-none text-md focus:border-b-3 focus:border-cyan-800"
                        />
                    </div>

                    <div className="space-y-1">
                        <Typography className="text-gray-600 font-medium">Delivery Time</Typography>
                        <input
                            type="time"
                            value={scheduleTime}
                            onChange={(e) => setScheduleTime(e.target.value)}
                            className="p-2 border-b-2  text-gray-600 focus:text-black focus:outline-none text-md focus:border-b-3 focus:border-cyan-800"
                        />

                    </div>

                </div>

                {/* Remark Section */}
                <div className="space-y-1">
                    <Typography className="text-gray-600 font-medium">Remark (Optional)</Typography>
                    <textarea
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                        placeholder="Enter any additional instructions..."
                        rows={3}
                        className="w-full border-b-3 border-gray-300 focus:border-cyan-600 focus:outline-none focus:border-b-3 px-1 py-2 text-sm bg-transparent"
                    />
                </div>

                {/* Cloth Update Section */}
                <div className="grid grid-cols-1 gap-6">
                    <Typography className="font-medium text-gray-500">Add or Remove Clothes</Typography>
                    {order.clothes.map((cloth, idx) => (
                        <div key={idx} className="flex justify-between mb-2">
                            <Typography>{cloth.type}</Typography>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    value={cloth.quantity}
                                    className="w-16 p-2 rounded-md border mr-2"
                                    onChange={(e) => handleClothQuantityChange(idx, e.target.value)}
                                />
                                <button
                                    onClick={() => handleRemoveCloth(idx)}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-2">
                    <Button
                       onClick={()=>Close(false)}
                        variant="text"
                        className="text-gray-700 hover:bg-gray-100 rounded-lg px-5 py-2"
                    >
                        Cancel
                    </Button>
                    <Button
                       
                        className="bg-gradient-to-tr from-cyan-700 to-cyan-500 text-white rounded-lg px-5 py-2 shadow-md"
                    >
                        Save Changes
                    </Button>
                </div>

            </div>

        </div>
    );
}
