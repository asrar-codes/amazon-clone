import React, { useContext } from "react";
import LoginBtn from "../components/LoginBtn";
LoginBtn;
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { LoginInput } from "../components";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useGlobalContext } from "../context/context";

export const action = async ({ request }) => {
  // const response = await createUserWithEmailAndPassword(auth);
  const formData = await request.formData();
  // console.log(formData);
  const data = Object.fromEntries(formData);
  // console.log(data);
  let user;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    // console.log(response);
    user = response.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  redirect("/");
  return user;
};

const SignUp = () => {
  const data = useActionData();
  console.log(data);
  const { formRef, emailRef, passwordRef } = useGlobalContext();

  return (
    <Form
      method="POST"
      className="form w-11/12  max-w-xl mx-auto mt-20 shadow-sm shadow-gray-300 border-red-300"
    >
      <div className="form-header text-center"></div>
      <section className="form-container flex flex-col gap-5 border-2 border-gray-300 p-6 rounded-lg ">
        <p className="text-3xl font-semibold text-center">Register</p>
        <LoginInput label={"username"} />
        <LoginInput label={"email"} />
        <LoginInput label={"password"} />

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
    </Form>
  );
};

export default SignUp;
