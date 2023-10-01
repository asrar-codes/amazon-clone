import React, { useEffect } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { navLinks } from "../utils/NavLinks";

const Navbar = () => {
  const { toggleSidebar, isDarkMode, toggleDarkMode } = useGlobalContext();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark:bg-slate-800", "text-white");
      return;
    } else {
      document.body.classList.remove("dark:bg-slate-800", "text-white");
      return;
    }
  }, [isDarkMode]);
  return (
    <>
      <nav className="flex justify-between items-center py-3 relative text-2xl sm:text-lg text-white bg-slate-700 sm:py-2 ">
        <button
          className="block p-1 rounded-lg sm:hidden"
          onClick={toggleSidebar}
        >
          <FaBars className="" />
        </button>
        <p className="hidden sm:block text-4xl border p-1 ml-4">BoxSpace</p>
        <ul className="hidden sm:flex nav-links w-10/12  justify-center gap-4 mx-4 capitalize children:cursor-pointer ">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="flex utils w-max items-center gap-4 mr-4 ">
          <p
            className="darkmode cursor-pointer text-xl"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </p>
          <Link to="login" className="">
            Login
          </Link>
          <Link to="signup" className="w-max ">
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
