import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const show__sidebar =
    "w-full h-full fixed top-0 right-0 left-0 bg-black bg-opacity-40 text-white z-30";
  const hide__sidebar = "";
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <>
      <aside
        className={`  transition-all  duration-500 ease-linear ${
          isSidebarOpen
            ? "w-full h-full fixed top-0 right-0 left-0 bg-black bg-opacity-30 text-white z-30 visible translate-x-0"
            : "w-0 h-full fixed top-0 right-0 left-0 bg-black bg-opacity-30 text-white z-30 invisible -translate-x-full"
        } `}
      >
        <div className="aside-container w-1/3  h-full bg-white overflow-y-scroll">
          <header className="sidebar-header flex justify-start gap-4 text-2xl font-semibold py-3 px-6 bg-slate-800">
            <div className=" w-1/2 flex gap-4">
              <button className="profile-icon ">
                <CgProfile />
              </button>
              <h2>Hello, sign in</h2>
            </div>
            <button
              className="close-sidebar-btn  flex justify-end w-1/2 "
              onClick={toggleSidebar}
            >
              <FaTimes className="text-red-800 text-3xl text-right" />
            </button>
          </header>
          <div className="section-container bg-white text-black  font-semibold">
            <section className="trending flex flex-col gap-2  ">
              <h2 className="text-2xl font-semibold px-4">Trending</h2>
              <div className=" flex flex-col gap-2 [&>a]:py-2 hover:[&>a]:bg-gray-200 ">
                <a className="px-4" href="#">
                  Best Sellers
                </a>

                <a className="px-4" href="#">
                  New Releases
                </a>
                <a className="px-4" href="#">
                  Movers and Shakers
                </a>
              </div>
            </section>
            <hr className="my-4" />
            <section className="Digital-content flex flex-col gap-2 [&>a]:py-2 hover:[&>a]:bg-gray-200">
              <h2 className="text-2xl font-semibold px-4">
                Digital Content And Devices
              </h2>
              <a className="px-4" href="#">
                Echo & Alexa
              </a>
              <a className="px-4" href="#">
                Fire TV
              </a>
              <a className="px-4" href="#">
                Kindle E-Readers & eBooks
              </a>
              <a className="px-4" href="#">
                Amazon Prime Music
              </a>
              <a className="px-4" href="#">
                Amazon Prime Video
              </a>
            </section>
            <hr className="my-4" />

            <section className="shop-by-category flex flex-col gap-2 [&>a]:py-2 hover:[&>a]:bg-gray-200 ">
              <h2 className="text-2xl font-semibold px-4">Shop By Category</h2>
              <a href="#" className="px-4">
                Mobiles, Computers
              </a>
              <a href="#" className="px-4">
                Tv, Appliances, Electronics
              </a>
              <a href="#" className="px-4">
                Men's Fashion
              </a>
              <a href="#" className="px-4">
                Women's Fashion
              </a>
              <a href="#" className="px-4">
                See All
              </a>
            </section>
            <hr className="my-4" />

            <section className="Programs-features flex flex-col gap-2  py-4 -my-4 capitalize [&>a]:py-2 hover:[&>a]:bg-gray-200">
              <h2 className="text-2xl font-semibold px-4 ">
                programs and features
              </h2>
              <a href="#" className="px-4">
                gift cards and mobile recharges
              </a>
              <a href="#" className="px-4">
                flight tickets
              </a>
              <a href="#" className="px-4">
                clearance store
              </a>
              <a href="#" className="px-4">
                Women's Fashion
              </a>
              <a href="#" className="px-4">
                See All
              </a>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
