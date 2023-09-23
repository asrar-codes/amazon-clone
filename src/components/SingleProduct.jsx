import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ id, attributes }) => {
  // console.log(attributes);
  console.log(id);

  return (
    <>
      <Link
        to={`/products/${id}`}
        className="single-product w-full text-center  bg-grey shadow-mainShadow  rounded-xl"
      >
        <div className="img-container ">
          <img
            src={attributes.image}
            alt={attributes.title}
            className="w-full h-64 bg-cover rounded-lg"
          />
        </div>
        <div className="desc">
          <h4 className="text-xl capitalize font-semibold ">
            {attributes.title}
          </h4>
          <p className="text-lg">$ {attributes.price}</p>
        </div>
      </Link>
    </>
  );
};

export default SingleProduct;
