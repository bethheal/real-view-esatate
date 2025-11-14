import React, { useState } from "react";
import RentSellButton from "../globalButton/homeButton";
// import { heroImg } from "../assets/index.js";
import { heroImg } from "../../assets";

const Hero = () => {
  const [price, setPrice] = useState(4000);
  const [area, setArea] = useState(1200);

  return (
    <div className="relative w-full min-h-screen bg-[#ffffe0] flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/* Foreground Content */}
      <div className="relative z-10 mt-[15vh] flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Main Title */}
        <h1 className="font-extrabold text-[#ed7d31] text-4xl mb-10">
          {" "}
          Real View Estate{" "}
        </h1>

        {/* Search Section */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-5xl">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <h2 className="font-semibold text-gray-800 text-lg">
              Search Properties For
            </h2>

            {/* Edgy Rent/Sell Buttons */}
            <div className="flex space-x-3">
              <RentSellButton />
            </div>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <select className="w-full border border-gray-300/50 bg-white/40 backdrop-blur-sm rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]">
              <option>Choose Location</option>
              <option>Accra</option>
              <option>Kumasi</option>
            </select>

            <select className="w-full border border-gray-300/50 bg-white/40 backdrop-blur-sm rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Commercial</option>
            </select>

            <select className="w-full border border-gray-300/50 bg-white/40 backdrop-blur-sm rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]">
              <option>Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
            </select>

            <select className="w-full border border-gray-300/50 bg-white/40 backdrop-blur-sm rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]">
              <option>Bathrooms</option>
              <option>1 Bathroom</option>
              <option>2 Bathrooms</option>
              <option>3 Bathrooms</option>
            </select>
          </div>

          {/* Range Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-semibold text-gray-700 flex justify-between">
                <span>Price Range ($)</span>
                <span className="text-[#ed7d31] font-bold">
                  ${price.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full accent-[#ed7d31] mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 flex justify-between">
                <span>Area Range (sqm)</span>
                <span className="text-[#ed7d31] font-bold">{area} m²</span>
              </label>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full accent-[#ed7d31] mt-2"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-[#ed7d31] text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#d96b1f] transition-all">
              Search Properties →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
