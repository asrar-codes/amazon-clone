import React from "react";

const Products = ({ id, title, image }) => {
  return (
    <div className="w-max h-full py-2 border -my-16 z-10  bg-white border-green-500 ">
      <h2>{title}</h2>

      <div className="img-container">
        <img src={image} alt={title} />
        <p>hello is ths</p>
      </div>
    </div>
  );
};

export default Products;
