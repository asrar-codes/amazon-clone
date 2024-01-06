import React from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";
import { LoginBtn, LoginInput } from "../components";
import CartTotals from "../components/CartTotals";
import { useGlobalContext } from "../context/context";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export const loader = (user) => () => {
  // console.log(user);
  if (!user) {
    toast.warn("You must be logged in to access this page");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const { user, cartProducts, orders, dispatchOrders, getUserCart } =
    useGlobalContext();
  const navigate = useNavigate();
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

  const handleOrders = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const remoteOrderData = await getUserOrders();

    let arr = [...JSON.parse(localStorage.getItem("cartDetails")).cartProducts];
    const localOrderData = {
      orderedProducts: arr,
      data: data,
    };
    try {
      if (remoteOrderData) {
        const prevData = remoteOrderData.orderedProducts;

        let arr = [
          ...prevData,
          ...JSON.parse(localStorage.getItem("cartDetails")).cartProducts,
        ];
        const localOrderData = {
          orderedProducts: arr,
          data: data,
        };

        const Ref = doc(
          db,
          "users",
          auth.currentUser.uid,
          "orders",
          auth.currentUser.uid
        );
        // const userCartRef = doc(db, "users", `${state.user.uid}`);

        const docRef = await setDoc(Ref, localOrderData);
        dispatchOrders(localOrderData);
        toast.success("Order Placed Successfully");
        navigate("/orders");
        console.log("&last");
        return;
      } else {
        const Ref = doc(
          db,
          `users`,
          auth.currentUser.uid,
          "orders",
          auth.currentUser.uid
        );
        const docRef = await setDoc(Ref, localOrderData);
        console.log(localOrderData);
        toast.success("Order Placed Successfully");
        dispatchOrders(localOrderData);
        navigate("/orders");
        return;
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      navigate("/checkout");
    }
  };

  if (cartProducts.length < 1) {
    return <SectionTitle text={"You've have no items in cart"} />;
  }
  return (
    <section className="w-11/12 h-screen mx-auto">
      <SectionTitle text="place your order" />
      <h1 className="mt-4 text-xl font-medium">Shipping information</h1>
      <div className="checkoutform grid gap-6 md:grid-cols-2 ">
        <form onSubmit={handleOrders} className="mt-4">
          <div>
            <LoginInput label={"name"} />
          </div>
          <div className="mt-4">
            <LoginInput label={"address"} />
          </div>
          <div
            className="mt-4
          "
          >
            <LoginBtn text="place your order" background={"bg-blue-500"} />
          </div>
        </form>
        <CartTotals />
      </div>
    </section>
  );
};

export default Checkout;
