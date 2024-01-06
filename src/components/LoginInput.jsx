import React from "react";
import { useGlobalContext } from "../context/context";

const LoginInput = ({ label, inputRef }) => {
  const { isDarkMode } = useGlobalContext();
  return (
    <label
      htmlFor="{label}"
      className="flex flex-col gap-1 capitalize"
      aria-required
    >
      {label}
      <input
        type={label}
        name={label}
        id={label}
        className={` ${
          isDarkMode.dark ? "bg-gray-700 text-white" : "bg-white text-black"
        } p-1  border   outline-none rounded-md`}
        ref={inputRef}
        autoComplete={`current-${label}`}
        required
      />
    </label>
  );
};

export default LoginInput;
