import React from "react";
import { useGlobalContext } from "../context/context";
import { CartItem, LoginBtn } from "../components";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts, totalPriceOfCart, isDarkMode, user } =
    useGlobalContext();
  // let totalPrice = 0;
  const tax = (15 / 100) * totalPriceOfCart;
  const shipping = 500;
  const grandTotal = totalPriceOfCart + tax + shipping;

  if (cartProducts.length < 1) {
    return (
      <section>
        <h2>No items in the cart...</h2>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1 className="font-medium text-2xl capitalize p-4">shopping cart</h1>
        <hr />
      </header>
      <section className="w-11/12 mx-auto grid lg:grid-cols-4 lg:mt-6">
        <div className="lg:col-span-3">
          {cartProducts.map((product, index) => {
            return <CartItem key={product.id} index={index} {...product} />;
          })}
        </div>

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
          <div className=" mt-4">
            {user ? (
              <Link
                to="/checkout"
                className="p-2 block text-center w-full  bg-violet-500 text-white text-lg capitalize rounded-lg"
              >
                proceed to checkout
              </Link>
            ) : (
              <Link
                to="/login"
                className="p-2 block text-center w-full  bg-violet-500 text-white text-lg capitalize rounded-lg"
              >
                please login
              </Link>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Cart;
