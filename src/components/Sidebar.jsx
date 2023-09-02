import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const show__sidebar =
    "w-1/2 fixed top-10 top-0 right-0 left-0 bg-black transition-all bg-opacity-40 text-white z-50";
  const hide__sidebar = "hidden";
  const { isSidebarOpen, toggleSidebar, hideSidebar } = useGlobalContext();

  return (
    <>
      <section
        className={`${isSidebarOpen ? `${show__sidebar}` : `${hide__sidebar}`}`}
      >
        <ul
          className="flex  flex-col nav-links w-10/12  justify-center gap-2 mx-2 capitalize children:cursor-pointer "
          onClick={hideSidebar}
        >
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
      </section>
    </>
  );
};

export default Sidebar;
