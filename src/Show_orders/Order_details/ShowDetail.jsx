import React from 'react';
import { useState } from 'react';
import { Button, Typography } from "@material-tailwind/react";
import ModifyOrderModal from './Container/ModifyOrderModal'
import Order_Info from './Container/Order_Info';
import CancelOrderModal from './Container/CancelOrderModal';
import { useLocation } from 'react-router-dom';

export default function ShowDetail() 
{
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [cancelOrder, setCancelOrder] = useState(false);


   const location=useLocation();
    const order=location.state.order;
    if (!order) return <p>No order data available</p>;

   

 

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


                    {/* ========== Order Info ========== */}
                    <Order_Info order={order} openModify={setIsModifyModalOpen} openCancel={setCancelOrder}/>

                   

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

                    {/* ========== Modification And Cancel Forms  ========== */}


                    {/* If Modify Modal is open */}
                    {isModifyModalOpen && (
                        <ModifyOrderModal
                            order={order}
                            Close={setIsModifyModalOpen}
                        />

                    )}

                    {/* If Cancel Modal is open */}
                    {cancelOrder && (
                        <CancelOrderModal
                            order={order}
                            cancelClose={setCancelOrder}
                            
                        />
                    )}


                </div>
            </div>
        </div>
    );
}
