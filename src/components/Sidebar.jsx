import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const show__sidebar =
    "w-full h-full fixed top-0 right-0 left-0 bg-black bg-opacity-40 text-white z-50";
  const hide__sidebar = "";
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowY = "hidden";
      return;
    } else {
      document.body.style.overflowY = "scroll";
      return;
    }
  }, [isSidebarOpen]);
  return (
    <>
      <aside
        className={`  transition-all  duration-500 ease-linear ${
          isSidebarOpen
            ? "w-screen h-screen fixed top-0 right-0 left-0 bg-black bg-opacity-30 text-white z-50 visible translate-x-0"
            : "w-screen h-full fixed top-0 right-0 left-0 bg-black bg-opacity-30 text-white z-50 invisible -translate-x-1/2"
        } `}
      ></aside>
    </>
  );
};

export default Sidebar;
