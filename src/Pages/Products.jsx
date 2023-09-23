import { useLoaderData } from "react-router-dom";
import { SingleProduct } from "../components";
import { useGlobalContext } from "../context/context";
import axios from "axios";
const products_url = "https://strapi-store-server.onrender.com/api/products";

let noOfPages;
export const loader = async () => {
  const { data } = await axios.get(products_url);
  // console.log(data);
  noOfPages = data.meta.pagination.pageCount;
  return { products: data.data, noOfPages };
};

const Products = () => {
  const { products, noOfPages } = useLoaderData();
  const { index, handlePageNo } = useGlobalContext();
  const btnArr = Array.from({ length: noOfPages }, (_, i) => i);
  // console.log(btnArr);

  return (
    <div className="p-10">
      <section className="w-11/12 products-container mx-auto mt-20 grid gap-8 grid-cols-productsGrid">
        {products.map((product) => {
          return <SingleProduct key={product.id} {...product} />;
        })}
      </section>
      <section className="pagination flex justify-end">
        <div className="button-container w-1/5 flex gap-6 text-xl bg-slate-100   p-2 rounded-lg">
          {btnArr.map((item, id) => {
            return (
              <button
                key={id}
                onClick={() => handlePageNo(id)}
                type="button"
                className={`${
                  index === id ? "text-red-700 bg-slate-300 rounded p-1" : ""
                } p-1 `}
              >
                {id + 1}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
