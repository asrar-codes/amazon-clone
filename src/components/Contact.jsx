import { useForm, ValidationError } from "@formspree/react";
import Emailvalidation from "@everapi/emailvalidation-js";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useGlobalContext } from "../context/context";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvleka");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { isDarkMode } = useGlobalContext();

  const emailRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e);
    const client = new Emailvalidation(
      "ema_live_G1bTR7j9y33GdlZPraMhzEhb4gZv7StcqggQhZq1"
    );

    try {
      const response = await client.info(`${emailRef.current.value}`, {
        catch_all: 0,
      });
      console.log(response);
      console.log(state);
      if (response.state === "undeliverable") {
        toast.error("Please stop kidding and provide a valid email adress 😎");
        emailRef.current.focus();
        emailRef.current.value = "";
        setIsEmailValid(false);
      } else if (response.state === "deliverable") {
        setIsEmailValid(true);
        toast.success("soon you will recieve the promised discount");
      }
    } catch (error) {
      setIsEmailValid(false);
      toast("something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      {isEmailValid ? (
        <p>Thanks for joining</p>
      ) : (
        <section className="w-11/12 mx-auto p-4 ">
          <p className="text-xl font-bold tracking-wide">
            Join our newsletter and get 20% OFF
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            inventore blanditiis neque minus earum nisi quis natus quas
            voluptatem nulla dolor aut facilis, alias
          </p>
          <form
            onSubmit={isEmailValid ? handleSubmit : handleClick}
            className="p-4"
          >
            <div className="display flex flex-wrap gap-4">
              <input
                id="email"
                type="email"
                name="email"
                className={` ${
                  isDarkMode ? "bg-gray-700 text-white" : "border-slate-600 "
                }p-1 text-lg  border rounded-md`}
                placeholder="Enter your email"
                autoComplete="current-email"
                ref={emailRef}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="p-1 text-lg bg-slate-600 rounded-md"
              >
                {state.submitting ? "submitting" : "submit"}
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Contact;