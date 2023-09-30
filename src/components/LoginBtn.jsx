import React from "react";

const LoginBtn = ({ text, clickFunction, background }) => {
  return (
    <button
      onClick={clickFunction}
      className={`w-full ${background} capitalize p-1 border text-white text-lg rounded-md`}
      type="submit"
    >
      {text}
    </button>
  );
};

export default LoginBtn;
