import React from "react";
import Carousel from "../components/Carousel";
import Products from "../components/ProductsFour";
import ProductSingle from "../components/ProductSingle";
import { useGlobalContext } from "../context/context";
import { singleProduct } from "../assets/productsData";
import ProductsTwo from "../components/ProductsTwo";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="products-container z-30 border w-11/12 mx-auto grid grid-cols-3 gap-4  border-rose-700">
        <section className="single-products-container  col-start-1 col-end-3  grid  gap-4 grid-cols-3   mx-auto border-4 border-green-500">
          {singleProduct.map((product) => {
            const { id, title, image } = product;
            return <ProductSingle key={id} title={title} image={image} />;
          })}
        </section>
        <ProductsTwo />
      </div>
    </>
  );
};

export default Home;
