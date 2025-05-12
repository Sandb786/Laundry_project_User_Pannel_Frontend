import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button, Typography } from '@material-tailwind/react'
import OrderDetail_Home from './Order_details/OrderDetail_Home';
import List_home from './Order_list/List_home';


export default function Show_page() 
{
  const order = getOrders(10);
  
  

 // const order = tempOrder; // Replace with actual order data  
  return (
    <div>

    {/* Header */}
      <header className='bg-white sticky z-10 top-0 p-2 py-3 flex gap-5 shadow-sm'>
        <a href="/"> <Button className='text-black p-2'><ArrowLeft /></Button></a>
        <Typography variant='lead' className='text-2xl md:text-3xl'>
          My Orders
        </Typography>
      </header>

        {/* Orders Section */}
        <section className=''>
          <List_home orders={order} />
        </section>



    </div>
  )
}

function getOrders(count) 
{
  const orderTypes = ["Normal Press", "Steam Press", "Roll Press", "Dry Cleaning", "Laundry"];
  const pickupTypes = ["Normal", "Urgent"];
  const statuses = ["Pending", "Rady for PickedUp", "In Process", "Delivered", "Cancelled"];
  const total=100;
  
  const remark="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const images = {
    "Normal Press": "/Color_Laundry/Normal_press.png",
    "Steam Press": "/Color_Laundry/Steam_press.png",
    "Roll Press": "/Color_Laundry/Roll_press.png",
    "Dry Cleaning": "/Color_Laundry/Dry_clean.png",
    "Laundry": "/Color_Laundry/Laundry.png"
  };

  const clothItems = [
    "Shirt", "Pants", "Kurta", "Pajama", "Dupatta", "T-Shirt", 
    "Jeans", "Sweater", "Scarf", "Blanket", "Towel", "Saree", 
    "Shalwar", "Chadar", "Shorts", "Curtain", "Tablecloth", "Jacket", "Cap"
  ];

  const orders = [];

  for (let i = 0; i < count; i++) {
    const ordertype = orderTypes[Math.floor(Math.random() * orderTypes.length)];
    const pickupDrop = pickupTypes[Math.floor(Math.random() * pickupTypes.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const image = images[ordertype];
    
    // generate random clothes
    const clothes = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ({
      type: clothItems[Math.floor(Math.random() * clothItems.length)],
      quantity: Math.floor(Math.random() * 5) + 1
    }));

    const order = {
      schedule: {
        date: `${10 + i}-05-2025`,
        time: `${10 + i} - ${11 + i} AM`
      },
      total: total + i,
      ordertype,
      pickupDrop,
      status,
      remark,
      image,
      clothes
    };

    orders.push(order);
  }

  return orders;
}



