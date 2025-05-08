import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Show_myOrders({ orders }) {
  return (
    <div className="overflow-y-auto space-y-4 pr-2 max-h-[72vh] sm:max-h-[600px]">
      {orders.map((order, index) => (
        <Card
          key={index}
          className="shadow-md hover:shadow-lg transition-shadow duration-300 mb-5 rounded-2xl"
        >
          <CardBody className="flex gap-4">
            {/* Image */}
            <img
              src={order.image}
              alt="service"
              className="w-20 h-20 rounded-lg object-cover"
            />

            {/* Details */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
               
                <Typography
                  variant="h6"
                  className="capitalize font-bold"
                >
                  {order.ordertype}
                  
                </Typography>
                <Typography
                  variant="small"
                  className="border text-green-600 border-green-600 p-0.5 rounded-md "
                >
                  {order.ordertype}
                </Typography>
              </div>

              <div className="flex justify-between mb-3 text-sm text-gray-700">
                <div>
                  <Typography variant="h7" className="font-semibold text-gray-500">
                   {order.schedule.date}
                  </Typography>
                  <Typography variant="small" className={`font-semibold ${order.pickupDrop==='Urgent'?'text-orange-500':'text-green-600'}`}>{order.pickupDrop}</Typography>
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

              {/* <div>
                <Typography
                  variant="small"
                  className="font-semibold text-gray-800 mb-1"
                >
                  Clothes:
                </Typography>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {order.clothes.map((cloth, i) => (
                    <li key={i}>
                      {cloth.type} - {cloth.quantity} pcs
                    </li>
                  ))}
                </ul>
              </div> */}
              
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
8