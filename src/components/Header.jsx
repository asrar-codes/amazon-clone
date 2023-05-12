import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const main_logo =
  "https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png";
const Header = () => {
  return (
    <header className="flex gap-2 items-center justify-between sticky top-0 left-0 right-0 z-10 bg-black text-white  ">
      <div className="logo mx-4">
        <NavLink to="/">
          <img
            src={main_logo}
            alt="Amazon"
            className="w-36 h-16 rounded-md object-contain border-l-rose-800 "
          />
        </NavLink>
      </div>

      <div className="nav-search  w-7/12 h-7 flex items-center ">
        <input type="search" className="w-8/12 outline-none h-7 text-black" />
        <button className="bg-orange-300 text-gray-800 font-bold h-7 px-4 ">
          <FaSearch />
          {/* <span>Download</span> */}
        </button>
      </div>
      <section className="account-details flex gap-4 text-sm">
        <div className="sign-in">
          <button className="w-fit"> hello asrarmaqbol@gmailcom</button>
          <button className=" px-2">
            <Link to="signin"> sign in</Link>
          </button>
        </div>
        <button>Your Prime</button>
        <div className="orders">
          Return <span>& Orders</span>
        </div>
        <div className="nav-cart mx-6">
          <button className="relative">
            <HiShoppingCart className="text-4xl"></HiShoppingCart>
            <span className="absolute -top-3 text-xl   -right-3 text-white-900 font-bold">
              0
            </span>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
