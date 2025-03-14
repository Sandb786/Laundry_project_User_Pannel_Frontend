import { Home, ShoppingBag, User, ClipboardList } from "lucide-react";

export default function Navbar() 
{
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-lg flex justify-around py-3 border-t border-gray-400 rounded-t-3xl">
      <NavButton icon={<Home size={24} />} label="Home" />
      <NavButton icon={<ShoppingBag size={24} />} label="Orders" />
      <NavButton icon={<ClipboardList size={24} />} label="Services Price" />
      <NavButton icon={<User size={24} />} label="Profile" />
    </div>
  );
}

function NavButton({ icon, label }) {
  return (
    <button className="flex flex-col items-center text-gray-700 hover:text-cyan-700  transition cursor-pointer">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
