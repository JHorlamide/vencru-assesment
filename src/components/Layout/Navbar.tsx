import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import LOGO from "../../assets/images/logomark.png";

export const Logo = () => {
  return (
    <div className="flex gap-1.5 items-center">
      <div className="p-2 rounded-full">
        <img src={LOGO} alt="logo" />
      </div>

      <h1 className="text-xl text-normal">Untitled UI</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-4 bg-white md:hidden">
      <Logo />

      <div className="">
        <HiOutlineMenuAlt1 className="text-gray-500" size={35} />
      </div>
    </div>
  );
};

export default Navbar;
