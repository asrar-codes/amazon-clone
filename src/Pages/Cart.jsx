import React from "react";
import { useGlobalContext } from "../context/context";
import { Select } from "../components";
import { formatPrice } from "../utils/formatPrice";

const Cart = () => {
  const { cartProducts } = useGlobalContext();
  return (
    <section className="w-11/12 mx-auto">
      <h1 className="font-medium text-2xl capitalize p-4">shopping cart</h1>
      <hr />
      {cartProducts.map((product) => {
        const { title, company, image, price } = product.cartItem.attributes;

        return (
          <section
            key={product.id}
            className="p-4 flex flex-col sm:items-center gap-3 sm:grid sm:grid-cols-4 "
          >
            <div className="img-container">
              <img
                src={image}
                alt={title}
                className=" w-[210px] h-[170px] object-cover rounded-lg "
              />
            </div>
            <div className="title">
              <h1 className="font-medium capitalize text-xl">{title}</h1>
              <p className="company font-medium text-gray-600">{company}</p>
              <span className="flex items-center gap-2 text-lg capitalize">
                color:
                <p
                  className="color w-6 h-6 inline-block rounded-[50%]"
                  style={{ backgroundColor: product.itemColor }}
                ></p>
              </span>
            </div>
            <div className="amount flex flex-col gap-2">
              <Select
                label={"amount"}
                name={"amount"}
                options={[1, 2, 3, 4, 5]}
                defaultValue={"2"}
              />
              <button className="remove w-[20%]">remove</button>
            </div>
            <div className="price sm:justify-self-end ">
              <h4>{formatPrice(price)}</h4>
            </div>
            <hr />
          </section>
        );
      })}
    </section>
  );
};

export default Cart;
