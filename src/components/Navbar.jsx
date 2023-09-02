import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <nav className="flex justify-between items-center py-2 relative  text-white bg-slate-700">
      <ul className="nav-links w-10/12 flex gap-4 mx-4 capitalize children:cursor-pointer ">
        <li
          className="flex gap-1 items-center font-semibold"
          onClick={toggleSidebar}
        >
          <FaBars />
          <span className="bold"> All</span>
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
    </nav>
  );
};

export default Navbar;
