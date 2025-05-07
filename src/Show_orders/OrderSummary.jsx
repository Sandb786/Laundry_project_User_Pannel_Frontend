import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function OrderSummary({ order }) {
  if (!order?.schedule) {
    return (
      <div className="w-full p-6 mt-2 bg-red-100 text-red-600 rounded-lg shadow">
        <Typography variant="h6">No order scheduled yet.</Typography>
      </div>
    );
  }

  const { schedule, ordertype, clothes = [] } = order;

  return (
    <Card className="w-full mt-5 shadow-lg bg-white">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
          📝 Your Order Summary
        </Typography>

        <div className="flex justify-between py-2 border-b">
          <Typography variant="small" color="gray">
            Pickup Date:
          </Typography>
          <Typography variant="small" color="blue-gray">
            {schedule.date}
          </Typography>
        </div>

        <div className="flex justify-between py-2 border-b">
          <Typography variant="small" color="gray">
            Pickup Time:
          </Typography>
          <Typography variant="small" color="blue-gray">
            {schedule.time}
          </Typography>
        </div>

        <div className="flex justify-between py-2 border-b">
          <Typography variant="small" color="gray">
            Order Type:
          </Typography>
          <Typography
            variant="small"
            color={ordertype === "normal" ? "green" : "amber"}
            className="capitalize"
          >
            {ordertype}
          </Typography>
        </div>

        <div className="py-2 mt-3">
          <Typography variant="small" color="gray" className="mb-2">
            Clothes:
          </Typography>
          {clothes.length === 0 ? (
            <Typography variant="small" color="blue-gray">
              No clothes added.
            </Typography>
          ) : (
            <ul className="list-disc list-inside text-sm text-blue-gray-700">
              {clothes.map((item, index) => (
                <li key={index}>
                  {item.type}: {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
