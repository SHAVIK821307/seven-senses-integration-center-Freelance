import React, { useState } from "react";
import logo from "../assets/logo.png";
import brandName from "../assets/BrandName.png";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="flex bg-[white] items-center justify-between text-sm py-4 mb-5 px-2 sm:px-[2%]  border-b border-b-gray-400">
      <div className="flex items-center">
        <img
          onClick={() => navigate("/")}
          className="w-10 h-auto cursor-pointer"
          src={logo}
          alt=""
        />
        {/* <img
          src={brandName}
          onClick={() => navigate("/")}
          className="cursor-pointer w-48 md:w-full"
        ></img> */}
        <span className="font-extrabold text-xl logo">
          {" "}
          {/* <span className="text-[blue]">Seven</span>{" "} */}
          <span className="text-blue-500">Senses</span>{" "}
          <span className="text-purple-950">Integration</span>{" "}
          <span className="text-green-600">Center</span>
        </span>
      </div>
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/services">
          <li className="py-1">Services</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/gallery">
          <li className="py-1">Gallery</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/franchise">
          <li className="py-1">Franchise</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <NavLink to="/contact" className="hidden md:flex">
        <span className=" border-2 border-[#4A4A4A] flex items-center gap-2 bg-[#FFF6E0] px-4 py-[0.37rem] lg:px-8 lg:py-3 rounded-[16px] text-[#4A4A4A] text-sm font-bold hover:scale-105 transition-all duration-300">
          Contact Us <img className="w-3" src={assets.arrow_icon} alt="" />
        </span>
      </NavLink>

      {/* ===========Mobile Menu=========== */}
      <div className="flex flex-col md:hidden">

        <HiMenuAlt3
          onClick={() => setShowMenu(true)}
          className="text-3xl md:hidden cursor-pointer m-auto"
          />
          <span onClick={() => setShowMenu(true)}
          className="text-sm md:hidden cursor-pointer text-center">MENU</span>
          </div>
      
    </div>
    <div className="md:hidden">
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className=" w-full px-4 py-6">
            <ImCross
              className="cursor-pointer text-2xl ml-auto"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col gap-2 items-center mt-5 px-5 text-left font-semibold">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block ">About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/services">
              <p className="px-4 py-2 rounded inline-block ">Services</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/gallery">
              <p className="px-4 py-2 rounded inline-block ">Gallery</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/franchise">
              <p className="px-4 py-2 rounded inline-block ">Franchise</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">Contact Us</p>
            </NavLink>
          </ul>
        </div>
      </div>
          </>
  );
};

export default Navbar;
