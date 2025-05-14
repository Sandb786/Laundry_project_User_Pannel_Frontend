import React from "react";
import { Typography, Radio, Button, Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function CancelPaymentPage({ reason = "Changed my mind", fee = 30 }) 
{
    const [paymentMethod, setPaymentMethod] = React.useState("cod");
    const navigate = useNavigate();
    
    const handlePayment = () => 
        {
        alert(`Order canceled!\nReason: ${reason}\nFee: ₹${fee}\nPayment: ${paymentMethod === "cod" ? "Cash on Delivery" : "Online"}`);
        // Add actual payment + cancel logic here
        toast.success("Order canceled successfully!");
        navigate("/myorders");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
            <Card className="w-full max-w-2xl p-6 shadow-lg bg-white space-y-6">
                
                <Typography variant="h4" className="text-red-600 font-bold text-center">
                    Cancel Order Payment
                </Typography>

                {/* Reason Section */}
                <div>
                    <Typography className="font-semibold text-gray-700 mb-1">
                        Cancellation Reason
                    </Typography>
                    <Typography className="text-gray-800 bg-gray-100 p-3 rounded-md border border-gray-200">
                        {reason}
                    </Typography>
                </div>

                {/* Fee Section */}
                <div className="space-y-1">
                    <Typography className="font-semibold text-gray-700">
                        Cancellation Fee
                    </Typography>
                    <Typography className="text-lg font-bold text-red-500">
                        ₹{fee} /-
                    </Typography>
                </div>

                {/* Payment Method */}
                <div className="space-y-2">
                    <Typography className="font-semibold text-gray-700">
                        Select Payment Method
                    </Typography>
                    <div className="flex flex-col space-y-2">
                        <Radio
                            name="payment"
                            label="Cash on Delivery (Default)"
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={() => setPaymentMethod("cod")}
                        />
                        <Radio
                            name="payment"
                            label="Online (UPI / Card)"
                            value="online"
                            checked={paymentMethod === "online"}
                            onChange={() => setPaymentMethod("online")}
                        />
                    </div>
                </div>

                {/* Confirm Button */}
                <div className="pt-4 flex justify-end">
                    <Button color="red" onClick={handlePayment} className="px-6 py-2 bg-red-600 shadow-md">
                        Pay ₹{fee} & Cancel Order
                    </Button>
                </div>
            </Card>
        </div>
    );
}
