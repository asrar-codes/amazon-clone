import React from "react";
import LoginBtn from "../components/LoginBtn";
LoginBtn;
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form className="form w-11/12 max-w-xl mx-auto mt-20 border-red-300">
      <div className="form-header text-center"></div>
      <section className="form-container flex flex-col gap-5 border-2 border-gray-300 p-6 rounded-lg shadow-mainShadow">
        <p className="text-3xl font-semibold text-center">Register</p>
        <label htmlFor="email" className="flex flex-col">
          username
          <input
            type="email"
            name="email"
            id="email"
            className="p-1 border-2   outline-slate-400"
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="p-1  border-2   outline-slate-400"
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col" aria-required>
          Password
          <input
            type="password"
            name="password"
            id="password"
            className="p-1  border-2 outline-slate-400"
          />
        </label>

        <LoginBtn text="register" background="bg-blue-500" />

        <div className="already-user flex gap-2">
          <p className="capitalize">already a memeber?</p>
          <Link className="capitalize text-purple-700" to="/login">
            sign in
          </Link>
        </div>
      </section>

      {/* <button onClick={logout} className="btn">
        logout
      </button> */}
    </form>
  );
};

export default SignUp;
