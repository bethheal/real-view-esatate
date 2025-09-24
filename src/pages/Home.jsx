import React from "react";
import RentSellButton from "./globalButton/homeButton";

const Home = () => {
  return (
    <div className="bg-[#ffffe0] w-full h-[100vh]">
      {/* Centered Title */}
      <div className="flex flex-col items-center justify-center text-center pt-30">
        <h1 className="font-extrabold text-[#ed7d31] text-4xl mb-10">
          Real View Estate
        </h1>
      </div>

      {/* Responsive Full-Screen Gray Box */}
      <div className="bg-gray-100 text-black h-[60vh] w-full lg:w-full sm:w-[95%] mx-auto my-6  text-lg flex justify-center  ">
        <RentSellButton />
      </div>
    </div>
  );
};

export default Home;
