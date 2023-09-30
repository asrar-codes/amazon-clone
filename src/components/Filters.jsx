import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Select from "./Select";
import LoginBtn from "./LoginBtn";
import { formatPrice } from "../utils/formatPrice";
import { useGlobalContext } from "../context/context";

const Filters = () => {
  const { companies, categories } = useLoaderData();
  const { isDarkMode } = useGlobalContext();
  // console.log(companies, categories);
  const [range, setRange] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);
  const sortArr = ["a-z", "z-a", "high", "low"];

  const handleSearch = () => {};
  const handleReset = () => {};
  return (
    <section
      className={` ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-slate-200"
      } filters mt-8 mx-auto px-6 py-6  rounded-lg `}
    >
      <div className="input-container w-full grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="search" className="capitalize">
            search product
          </label>
          <input
            type="search"
            name="search"
            className={`${
              isDarkMode && " bg-gray-600 text-white"
            } p-1 border outline-none border-slate-500 rounded-lg`}
            id="search"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Select
            label={"select category"}
            name="categories"
            options={categories}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Select
            label={"select company"}
            name={"categories"}
            options={companies}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Select label={"sort by"} name={"sort"} options={sortArr} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="file " className="flex capitalize justify-between">
            select price:
            <span className="justify-center">{formatPrice(range)}</span>
          </label>
          <input
            type="range"
            name="range"
            min={0}
            max={100000}
            className={` "cursor-pointer"`}
            step={1000}
            value={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <label htmlFor="checkbox " className="flex capitalize">
            free shipping
          </label>
          <input
            type="checkbox"
            name="free shipping"
            className="w-6 h-6  select-none bg-purple-500 cursor-pointer checked:bg-slate-600  rounded-[50%]"
            value={freeShipping}
            onChange={() => setFreeShipping(!freeShipping)}
            id="checkbox"
          />
        </div>
        <div>
          <LoginBtn
            text={"search"}
            clickFunction={handleSearch}
            background={"bg-purple-500"}
          />
        </div>
        <div>
          <LoginBtn
            text={"reset"}
            clickFunction={handleReset}
            background={"bg-violet-500"}
          />
        </div>
      </div>
    </section>
  );
};

export default Filters;
