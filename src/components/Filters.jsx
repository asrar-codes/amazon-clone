import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Select from "./Select";
import { confirmPasswordReset } from "firebase/auth";
import { Login } from "../Pages";
import LoginBtn from "./LoginBtn";
import { formatPrice } from "../utils/formatPrice";

const Filters = () => {
  const { companies, categories } = useLoaderData();
  // console.log(companies, categories);
  const [range, setRange] = useState(0);
  const [freeShipping, setFreeShipping] = useState(false);
  const sortArr = ["a-z", "z-a", "high", "low"];

  const handleSearch = () => {};
  const handleReset = () => {};
  return (
    <section className="filters w-11/12 mx-auto p-6 bg-slate-200 rounded-lg">
      <div className="input-container grid grid-cols-4 justify-around gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="search" className="capitalize ">
            search product
          </label>
          <input
            type="text"
            className="p-1 border outline-none border-slate-500 rounded-lg"
            id="search"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            select category
          </label>
          <Select options={categories} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            select company
          </label>
          <Select options={companies} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize">
            sort by
          </label>
          <Select options={sortArr} />
        </div>
      </div>
      <div className="button-container grid grid-cols-4 justify-around items-center  gap-6  mt-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="file " className="flex capitalize justify-between">
            select price:
            <span className="justify-center">{formatPrice(range)}</span>
          </label>
          <input
            type="range"
            name="price"
            min="0"
            max="100000"
            className="cursor-pointer"
            step="1000"
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
            name="price"
            className="w-6 h-6  select-none bg-purple-500 cursor-pointer checked:bg-slate-600  rounded-[50%]"
            value={freeShipping}
            onChange={() => setFreeShipping(!freeShipping)}
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
