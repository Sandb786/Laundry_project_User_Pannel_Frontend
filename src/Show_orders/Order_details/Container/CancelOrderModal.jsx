import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function CancelOrderModal({ order, cancelClose }) {
    const [cancelReason, setCancelReason] = useState("");
    const cancellationFee = 20; // Update the cancellation fee as needed
      const navigate=useNavigate(); 
   

    const handleConfirmCancel = () => 
    {
        if (cancelReason.trim()) {
            const cancelledOrder = {
                ...order,
                status: "Cancelled",
                cancelReason: cancelReason.trim()
            };

            navigate(`/cancel`);

            
            //onCancelConfirm(cancelledOrder);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
            <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto">

                <div className="border-b pb-4">
                    <Typography variant="h5" className="text-red-600 font-bold">
                        Cancel Order
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                        You must pay ₹{cancellationFee} to cancel this order. Please provide a valid reason.
                    </Typography>
                </div>

                <div className="space-y-1">
                    <Typography className="text-gray-600 font-medium">Reason for Cancellation</Typography>
                    <textarea
                        value={cancelReason}
                        onChange={(e) => setCancelReason(e.target.value)}
                        placeholder="Write the reason here..."
                        rows={3}
                        className="w-full border-b-2 border-gray-300 focus:border-red-500 focus:outline-none px-1 py-2 text-sm bg-transparent"
                    />
                </div>

                <div className="flex justify-end gap-4 pt-2">
                    <Button
                        onClick={()=>cancelClose(false)}
                        variant="text"
                        className="text-gray-700 hover:bg-gray-100 rounded-lg px-5 py-2"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={handleConfirmCancel}
                        disabled={!cancelReason.trim()}
                        
                        className="bg-gradient-to-tr from-red-700 to-red-500 text-white rounded-lg px-5 py-2 shadow-md disabled:opacity-50"
                    >
                        Confirm Cancellation (₹{cancellationFee})
                    </Button>
                </div>
            </div>
        </div>
    );
}   
 