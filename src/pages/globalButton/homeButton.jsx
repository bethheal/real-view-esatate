import React, { useState } from "react";
import "../../index.css";
import { LuArrowRight } from "react-icons/lu";

const RentSellButton = () => {
  const [isRent, setIsRent] = useState(true);

  const handleToggle = () => {
    setIsRent(!isRent);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      

      <div
        className="flex items-center justify-between bg-gray-300 rounded-md w-[200px] sm:w-[220px] h-10 cursor-pointer relative overflow-hidden shadow-md"
        onClick={handleToggle}
      >
        {/* Highlighted slide background */}
        <div
          className={`absolute w-1/2 h-full bg-[#887232] transition-all duration-300 ${
            isRent ? "left-0" : "left-1/2"
          }`}
        ></div>

        {/* Labels */}
        <div className="flex w-full z-10 text-white font-semibold text-sm items-center justify-center gap-1">
          {/* Rent */}
          <div
            className={`w-1/2 text-center flex items-center justify-center gap-1 transition-colors duration-300 ${
              isRent ? "text-white" : "text-[#887232]"
            }`}
          >
            {isRent ? "Rent" : <LuArrowRight className="text-[#887232]" />}
          </div>

          {/* Sell */}
          <div
            className={`w-1/2 text-center flex items-center justify-center gap-1 transition-colors duration-300 ${
              isRent ? "text-[#887232]" : "text-white"
            }`}
          >
            {isRent ? <LuArrowRight className="text-[#887232]" /> : "Sell"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentSellButton;
