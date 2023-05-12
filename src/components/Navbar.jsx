import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

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
            to="mobiles"
            className={({ isActive }) => (isActive ? "link active" : "link")}
            end
          >
            Mobiles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="electronics"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="kitchen"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Kitchen Ware
          </NavLink>
        </li>
        <li>
          <NavLink
            to="prime"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Prime
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
