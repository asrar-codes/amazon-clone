import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <>
      <nav className="flex justify-between items-center py-2 relative  text-white bg-slate-700  ">
        <button
          className="block p-1 rounded-lg sm:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <p className="hidden sm:block text-4xl border p-1 ml-2 ">BoxSpace</p>
        <ul className="hidden sm:flex nav-links w-10/12  justify-center gap-4 mx-4 capitalize children:cursor-pointer ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              end
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              end
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex utils  gap-4 mr-2 ">
          <p className="darkmode">darkmode</p>
          <p className="darkmode">Login</p>
          <p className="darkmode">Singup</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
