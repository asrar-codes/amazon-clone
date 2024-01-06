import React from "react";

import { useGlobalContext } from "../context/context";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { isDarkMode, user, totalPriceOfCart } = useGlobalContext();
  const tax = (15 / 100) * totalPriceOfCart;
  const shipping = 500;
  const grandTotal = totalPriceOfCart + tax + shipping;
  return (
    <section className="cartTotals w-full lg:justify-self-center  text-md  ">
      <div
        className={`w-full ${
          isDarkMode.dark ? "bg-gray-700 text-white" : "bg-gray-300 "
        }capitalize p-2 rounded-lg `}
      >
        <p className="subtotal flex justify-between p-2">
          <span>subtotal</span>
          {formatPrice(totalPriceOfCart)}
        </p>
        <hr />
        <p className="subtotal flex justify-between p-2">
          <span>shipping</span>
          {formatPrice(shipping)}
        </p>
        <hr />
        <p className="subtotal flex justify-between p-2">
          <span>tax</span>
          {formatPrice(tax)}
        </p>
        <hr className="border-gray-600" />
        <p className="subtotal flex justify-between p-2">
          <span>order total</span>
          {formatPrice(grandTotal)}
        </p>
      </div>
    </section>
  );
};

export default CartTotals;
