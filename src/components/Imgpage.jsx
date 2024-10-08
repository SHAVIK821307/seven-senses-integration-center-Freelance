import React from "react";
import { assets } from "../assets/assets";

const Imgpage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <img
        src={assets.Imgpage1}
        className="w-full h-auto lg:w-1/2 object-cover p-2"
        alt="Image 1"
      />
      <img
        src={assets.Imgpage2}
        className=" w-full h-auto lg:w-1/2 object-cover p-2"
        alt="Image 2"
      />
    </div>
  );
};

export default Imgpage;
