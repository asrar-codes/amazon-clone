import React from "react";

const ProductSingle = ({ image, title }) => {
  return (
    <div className="w-full h-9 py-2 border -my-16 z-50 bg-white border-green-500 ">
      <h2>{title}</h2>
      <img src={image} alt={title} className="object-cover " />
    </div>
  );
};

export default ProductSingle;
