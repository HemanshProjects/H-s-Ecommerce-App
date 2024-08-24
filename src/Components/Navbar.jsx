import React from "react";
import Logo from "../Assets/Capture.png";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="py-2 shadow-[0_1px_0_0] shadow-slate-500 flex justify-around fixed top-0 right-6 left-6  bg-white">
      <Link to="/" className="flex items-center space-x-2 flex-1">
        <img src={Logo} alt="Logo" className="h-[30px]" />
        <span className="font-Merriweather font-bold">H's Shopping App</span>
      </Link>

      <div className="flex-1 flex justify-end items-center space-x-5 text-sm">
        <Link className="flex items-center text-4xl" to="/my-cart"> 
          {count === 0 ? (
            <ShoppingBagOutlinedIcon fontSize="inherit" />
          ) : (
            <div className="relative">
              <ShoppingBagIcon fontSize="inherit" />
              <span className="absolute top-2 right-3.5 text-white text-[12px] font-bold">
                {count}
              </span>
            </div>
          )}
        </Link>
        <Link className="max-md:hidden ">LogIn</Link>
        <Link className="max-md:hidden ">ContactUs</Link>
      </div>
    </div>
  );
};

export default Navbar;
