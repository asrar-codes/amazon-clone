import React from "react";

const Footer = () => {
  return (
    <section className="w-full text-center">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="font-semibold ">BoxSpace</span>
      </h5>
      <p>All rights reserved</p>
    </section>
  );
};

export default Footer;
