import React, { useState, useEffect, useRef } from "react";
import { Typography } from "@material-tailwind/react";
import {
  Store,
  Phone,
  User,
  MapPin,
  BadgeInfo,
  Wrench,
} from "lucide-react";

export default function Header({ shopInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white px-6 py-4 shadow-md z-50 border-b border-gray-200">
      <div className="flex items-center justify-between">
        {/* Logo + Basic Info */}
        <div className="flex items-center gap-4">
          <img src="/Color_Laundry/Navigation.png" className="w-12 h-12" />
          <div className="space-y-0.5">
            <Typography variant="h6" className="text-gray-900 font-bold flex items-center gap-1">
              <Store size={18} /> {shopInfo.laundryName}
            </Typography>
            <p className="text-sm text-gray-600 font-medium flex items-center gap-1">
              <Phone size={14} className="text-cyan-700" />
              Laundry ID: <span className="text-cyan-700">{shopInfo.laundryMobile}</span>
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className="bg-cyan-700 hover:bg-cyan-600 transition px-5 py-2 rounded-xl text-white text-sm font-semibold shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide Info" : "View Info"}
        </button>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="mt-4 w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-4 transition-all"
        >
          <Typography variant="h6" className="text-cyan-700 font-semibold mb-4 flex items-center gap-2">
            <BadgeInfo size={20} /> Laundry Shop Details
          </Typography>

          <div className="grid grid-cols-1 gap-4 text-sm text-slate-700">

            <p className="flex items-center gap-2">
              <User size={16} className="text-gray-500" />
              <span className="font-medium">Owner:</span> {shopInfo.ownerName}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <span className="font-medium">Owner Phone:</span> {shopInfo.ownerPhone}
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <span className="font-medium">Mobile:</span> {shopInfo.laundryMobile}
            </p>
            <p className="flex items-center gap-2">
              <BadgeInfo size={16} className="text-gray-500" />
              <span className="font-medium">Plan:</span> {shopInfo.selectedPlan}
            </p>
            <p className="col-span-2 flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gray-500" />
              <span className="font-medium">Address:</span> {shopInfo.landmark}, {shopInfo.city} - {shopInfo.pincode}, {shopInfo.state}
            </p>

          </div>

          {/* Services */}
          <div className="mt-4">
            <p className="text-gray-800 font-medium mb-2 flex items-center gap-2">
              <Wrench size={16} /> Services Offered:
            </p>
            <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 list-disc list-inside ml-4">
              {shopInfo.services?.map((service, index) => (
                <li key={index}>
                  {service.name} — Starting at: ₹{service.price}
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </header>
  );
}
