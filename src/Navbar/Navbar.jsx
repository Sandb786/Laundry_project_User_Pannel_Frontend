import { Home, ShoppingBag, User, ClipboardList } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() 
{
  const [active, setActive] = useState("Home"); // Track active button
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", icon: <Home size={24}/> , link:'/' },
    { label: "Orders", icon: <ShoppingBag size={24} /> , link:'/myorders'},
    { label: "Services Price", icon: <ClipboardList size={24} /> , link:'/' },
    { label: "Profile", icon: <User size={24} /> , link:'#'},
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-lg flex justify-around py-3 border-t border-gray-400 rounded-t-3xl">
      {navItems.map((item) => (
        <div key={item.label} className="relative flex flex-col items-center">
          <button
            className={`flex flex-col items-center ${
              active === item.label ? "text-cyan-700" : "text-gray-700"
            } hover:text-cyan-700 transition cursor-pointer`}
            onClick={() =>{setActive(item.label); navigate(item.link)}}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>

          {/* Active Indicator Animation */}
          {active === item.label && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute -bottom-2 w-10 h-1 bg-cyan-700 rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
