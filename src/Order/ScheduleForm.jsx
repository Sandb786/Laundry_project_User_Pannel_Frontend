import { Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function ScheduleForm({ order, setOrder }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(5);

  const timeSlots = [
    "07 - 09 AM", "10 - 11 AM", "12 - 02 PM",
    "03 - 05 PM", "06 - 08 PM", "08 - 10 PM"
  ];

  // Generate full date based on selectedDate index
  const getScheduledDate = (index) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + index);
    return newDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  };

  // Sync to order object when date or time changes
  useEffect(() => {
    const date = getScheduledDate(selectedDate);
    const time = timeSlots[selectedTime];

    setOrder(prev => ({
      ...prev,
      schedule: {
        date,
        time,
      }
    }));
  }, [selectedDate, selectedTime]);

  return (
    <div className="w-full bg-gray-100 p-6 mt-2 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Schedule Order
      </h2>

      <div className="bg-white p-5 rounded-md shadow-sm">

        <Typography>When would you like your clothes to be picked up?</Typography>
        <div className="grid grid-cols-3 gap-3">
          {[...Array(4)].map((_, i) => {
            const newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            const isSelected = selectedDate === i;

            return (
              <div
                key={i}
                onClick={() => setSelectedDate(i)}
                className={`p-3 rounded-md shadow-sm text-center mt-5 border-2 cursor-pointer transition-all duration-300 
                ${isSelected ? "bg-cyan-800 text-white" : "bg-gray-50 text-cyan-800 border-cyan-800"}
              `}
              >
                <Typography className="font-semibold text-lg">
                  {days[newDate.getDay()]} <br /> {newDate.getDate()}
                </Typography>
              </div>
            );
          })}
        </div>

        <Typography className="mt-6">Select a time slot</Typography>
        <div className="grid grid-cols-3 mt-5 gap-2">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(index)}
              className={`w-fit p-2 rounded-md mt-3 cursor-pointer transition-all duration-300 border 
              ${selectedTime === index ? "bg-cyan-800 text-white" : "text-cyan-800 border-cyan-800 border-2"}`}
            >
              {slot}
            </div>
          ))}
        </div>

        


      </div>
    </div>
  );
}
