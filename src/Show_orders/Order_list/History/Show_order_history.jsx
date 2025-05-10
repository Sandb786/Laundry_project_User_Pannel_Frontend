import React from 'react'
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Show_order_history({ orders }) 
{
  // // Filter orders that are Delivered or Cancel (optional if already filtered outside)
  // const historyOrders = orders.filter(
  //   (order) => order.status === 'Delivered' || order.status === 'Cancel'
  // );

  return (
    <div className="overflow-y-auto space-y-4 pr-2 max-h-[72vh] sm:max-h-[600px]">
      {orders.map((order, index) => (
         <motion.div
         key={index}
         initial={{ opacity: 0, y: 30 }}
         // transition={{ duration: 0.2 }}
         animate={{ opacity: 1, y: 0 }}
         whileTap={{ scale: 0.85, rotate: 0.1, }}
       >
        <Card
          key={index}
          className="shadow-md hover:shadow-lg transition-shadow duration-300 mb-5 rounded-2xl"
        >
          <CardBody className="flex gap-4">
            {/* ✅ Conditional image based on status */}
            <img
              src={order.status === 'Delivered' ? "/Color_Laundry/Done.png" : "/Color_Laundry/Wrong.png"}
              alt="service"
              className="w-18 h-18 mt-2 rounded-lg object-cover"
            />

            {/* Details */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <Typography variant="h6" className="capitalize font-bold">
                  {order.ordertype}
                </Typography>
                <Typography
                  variant="small"
                  className={`border p-0.5 px-1 rounded-md font-semibold ${
                    order.status === 'Cancelled'
                      ? 'text-red-600 border-red-600'
                      : 'text-green-600 border-green-600'
                  }`}
                >
                  {order.status}
                </Typography>
              </div>

              <div className="flex justify-between mb-3 text-sm text-gray-700">
                <div>
                  <Typography variant="h7" className="font-semibold text-gray-500">
                    {order.schedule.date}
                  </Typography>
                  <Typography
                    variant="small"
                    className={`font-semibold ${
                      order.pickupDrop === 'Urgent'
                        ? 'text-orange-500'
                        : 'text-green-600'
                    }`}
                  >
                    {order.pickupDrop}
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" className="font-medium ">
                    Time:
                  </Typography>
                  <Typography variant="small">
                    <span className="font-light">{order.schedule.time}</span>
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        </motion.div>
      ))}
    </div>
  );
}
