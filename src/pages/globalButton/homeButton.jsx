import React, { useState } from "react";
import "../../index.css";
import { LuArrowRight } from "react-icons/lu";


const RentSellButton = () => {
  const [isRent, setIsRent] = useState(true);

  const handleToggle = () => {
    setIsRent(!isRent);
  };

  return (
    <div className="flex p-10 justify-center ">
         <span  className="pr-10">
              Search Properties 
              </span>
      <div
        className="flex items-center justify-between bg-gray-300 rounded-full w-[15vw] h-9 cursor-pointer relative overflow-hidden"
        onClick={handleToggle}
      >
        <div
          className={`absolute w-1/2 h-full bg-[#887232] transition-all duration-300 ${
            isRent ? "left-0" : "left-1/2"
          }`}
        ></div>

{/* rent and sell buttons  */}
         <div className="flex w-full z-10 text-white font-bold text-sm items-center justify-center gap-1">
          <div className="w-1/2 text-center flex items-center justify-center gap-1">
            {isRent ? "Rent" : <LuArrowRight className="text-black"  />}
          </div>
          <div className="w-1/2 text-center flex items-center justify-center gap-1">
            {isRent ? <LuArrowRight className="text-black"  /> : "Sell"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentSellButton;
