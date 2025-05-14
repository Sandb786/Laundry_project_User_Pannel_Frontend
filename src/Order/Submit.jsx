import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Submit({ order }) {
  const navigate = useNavigate();

  const handlePlaceOrder = async () => 
    {
    try {
     // const response = await fetch("http://localhost:8083/laundryhub");

      //  if (!response.ok) {
      //    throw new Error("Failed to place order");
      //  }

      toast.success("🎉 Order placed successfully!");
      
      setTimeout(() => {
        navigate("/myorders");
      }, 800); // Delay to let the toast show
    } catch (error) {
      toast.error("🚫 Failed to place order. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex-grow" />

      <div
        className={`fixed bottom-18 left-0 w-full bg-gray-50 px-5 py-4 shadow-lg border-t border-gray-200 flex items-center justify-between gap-3 md:gap-0 transition-all duration-500 ease-in-out
          ${order.total !== 0 ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-full invisible'}
        `}
      >
        {/* Total Amount */}
        <div className="flex flex-col items-start">
          <div className="text-lg font-semibold text-gray-800">
            Total: ₹{order.total || 0}
          </div>
          <div className="text-sm text-gray-500">
            Includes free pickup & delivery
          </div>
          <div className="text-xs text-gray-400 mt-1">
            You will pay upon delivery
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="bg-cyan-800 text-white py-2 px-5 rounded-md flex items-center gap-2 hover:bg-cyan-700 transition"
        >
          <ShoppingCart size={18} />
          Place Order
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
