import React from "react";
import Carousel from "../components/Carousel";
import Products from "../components/ProductsFour";
import ProductSingle from "../components/ProductSingle";
import { useGlobalContext } from "../context";
import { singleProduct } from "../assets/productsData";
import ProductsTwo from "../components/ProductsTwo";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="products-container grid grid-cols-3 border border-rose-700">
        <section className="single-products-container w-11/12 justify-center mx-auto grid gap-4 grid-cols-2 col-span-3 border-4 border-green-500">
          {singleProduct.map((product) => {
            const { id, title, image } = product;
            return <ProductSingle key={id} title={title} image={image} />;
          })}
        </section>
        <div className="products-two">
          <ProductsTwo />
        </div>
      </div>
    </>
  );
};

export default Home;
