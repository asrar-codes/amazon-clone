import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <section className="w-11/12 mx-auto mt-20 grid gap-8 grid-cols-productsGrid">
      {products.map((product) => {
        const { attributes } = product;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="single-product w-full p-4 text-center  bg-grey shadow-mainShadow  rounded-xl"
          >
            <div className="img-container ">
              <img
                src={attributes.image}
                alt={attributes.title}
                className="w-full mx-auto h-64 object-cover rounded-lg"
              />
            </div>
            <div className="desc">
              <h4 className="text-xl capitalize font-semibold ">
                {attributes.title}
              </h4>
              <p className="text-lg">{formatPrice(attributes.price)}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default ProductsGrid;
