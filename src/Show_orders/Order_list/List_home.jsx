import { Typography, Card, CardBody } from '@material-tailwind/react';
import React, { useState } from 'react';
import Show_myOrders from './Orders/Show_myOrders';
import Show_order_history from './History/Show_order_history';

export default function ListHome({orders}) 
{
  const [activeTab, setActiveTab] = useState('orders');

  console.log("LIST OR: ",orders);

  return (
    <div className="flex flex-col items-center w-full mt-0 bg-gray-200">
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-x-40 md:gap-x-250 mt-3  rounded-t-lg">
        <Typography
          variant="h5"
          onClick={() => setActiveTab('orders')}
          className={`cursor-pointer pb-2 transition-all duration-200 ${
            activeTab === 'orders'
              ? 'border-b-4 border-cyan-800 text-cyan-800'
              : 'text-gray-700 hover:text-cyan-800'
          }`}
        >
          Orders
        </Typography>

        <Typography
          variant="h5"
          onClick={() => setActiveTab('history')}
          className={`cursor-pointer pb-2 transition-all duration-200 ${
            activeTab === 'history'
              ? 'border-b-4 border-cyan-800 text-cyan-800'
              : 'text-gray-700 hover:text-cyan-800'
          }`}
        >
          History
        </Typography>
      </div>

      {/* Content below based on active tab */}
      <div className="w-full max-w-4xl bg-gray-100 mt-3 p-5 rounded-t-3xl shadow-lg">
        {activeTab === 'orders' && <Show_myOrders orders={orders}/>}
        {activeTab === 'history' && <Show_order_history />}
      </div>
    </div>
  );
}
