import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [ismenuopen, setismenuopen] = useState(false);
  const menutoggler = () => {
    setismenuopen(!ismenuopen);
  };
  return (
    <>
      <nav className="h-16 fixed z-30 text-white flex justify-between  items-center px-5 md:px-10 bg-zinc-900 w-full">
        <h2 className="font-semibold text-xl">Logo</h2>
        <div className="navlinks hidden md:flex font-semibold  gap-5">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          onClick={menutoggler}
          className="md:hidden text-white hover:bg-white hover:text-black h-8 w-8 rounded-full hover:scale-110 transition-all delay-150 duration-300 flex justify-center items-center"
        >
          {ismenuopen ? <IoMdClose /> : <RiMenu3Fill />}
        </button>
      </nav>
      {ismenuopen && (
        <div className="w-full absolute flex flex-col bg-zinc-800 text-white  font-semibold text-lg  z-30 top-16">
          <Link
            className="hover:px-5 p-3 w-full transition-all hover:bg-zinc-700"
            to="/home"
            onClick={menutoggler}
          >
            Home
          </Link>
          <Link
            className="hover:px-5 p-3 w-full transition-all hover:bg-zinc-700"
            to="/about"
            onClick={menutoggler}
          >
            About
          </Link>
          <Link
            className="hover:px-5 p-3 w-full transition-all hover:bg-zinc-700"
            to="/services"
            onClick={menutoggler}
          >
            Services
          </Link>
          <Link
            className="hover:px-5 p-3 w-full transition-all hover:bg-zinc-700"
            to="/contact"
            onClick={menutoggler}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
