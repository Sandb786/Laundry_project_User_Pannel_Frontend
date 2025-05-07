import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function Show_myOrders({ orders }) {
  console.log("Show my: ", orders);

  return (
    <div className="overflow-y-auto space-y-4 pr-2 max-h-[788px] sm:max-h-[600px] md:max-h-[700px]">
      {orders.map((order, index) => (
        <Card
          key={index}
          className="shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <CardBody>
            <div className="flex justify-between items-center mb-2">
              <Typography
                variant="h6"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-extrabold"
              >
                Order #{index + 1}
              </Typography>
              <Typography
                variant="small"
                className="text-gray-600 capitalize"
              >
                {order.ordertype}
              </Typography>
            </div>

            <div className="flex justify-between mb-3 text-sm text-gray-700">
              <div>
                <Typography variant="small" className="font-medium">
                  Date:
                </Typography>
                <Typography variant="small">{order.schedule.date}</Typography>
              </div>
              <div>
                <Typography variant="small" className="font-medium">
                  Time:
                </Typography>
                <Typography variant="small">{order.schedule.time}</Typography>
              </div>
            </div>

            <div>
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
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
