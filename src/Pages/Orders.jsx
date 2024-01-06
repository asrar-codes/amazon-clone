import React, { useEffect } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/context";
import SectionTitle from "../components/SectionTitle";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { CartItem } from "../components";
import { formatPrice } from "../utils/formatPrice";
import { BsCheckLg } from "react-icons/bs";

export const loader = (user) => async () => {
  if (!user) {
    toast.warn("You must be logged in to access this page");
    return redirect("/login");
  }
  const getUserOrders = async () => {
    let data;
    try {
      const userCartRef = collection(db, `users/${user.uid}/orders`);
      const querySnapshot = await getDocs(userCartRef);

      querySnapshot.forEach((doc) => {
        data = { ...doc.data() };
      });
      // console.log(data);
      return data;
    } catch (error) {
      toast.error("some error occured");
      console.log(error);
      return null;
    }
  };
  const data = await getUserOrders();
  if (data) {
    // console.log(data);
    return data;
  } else {
    return null;
  }
};

const Orders = () => {
  // const { orderedProducts } = useLoaderData();
  const data = useLoaderData();
  console.log(data);
  const { setOrders } = useGlobalContext();
  // console.log(orders);
  useEffect(() => {
    if (data) setOrders(data.orderedProducts);
  }, []);
  if (!data) {
    return <SectionTitle text="no orders found.." />;
  }

  return (
    <section className="">
      <SectionTitle text={"your orders"} />
      <hr />
      {data.orderedProducts?.map((product, index) => {
        {
          /* console.log(product); */
        }
        const { image, title, company, price, itemColor } = product;
        return (
          <section
            key={index + 1}
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
                  style={{ backgroundColor: itemColor }}
                ></p>
              </span>
            </div>
            <div className="price sm:justify-self-end">
              <h4>{formatPrice(price)}</h4>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Orders;
