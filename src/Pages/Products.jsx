import {
  useLoaderData,
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { Filters, ProductsContainer } from "../components";
// import { useGlobalContext } from "../context/context";
// import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { customFetch } from "../utils/customFetch";
import { useGlobalContext } from "../context/context";

let noOfPages;
let search = "";
export const loader = async () => {
  console.log(search);
  const { data } = await customFetch.get(`/products${search}`);
  console.log(data);
  noOfPages = data.meta.pagination.pageCount;

  // console.log(data);
  return {
    products: data.data,
    noOfPages,
    companies: data.meta.companies,
    categories: data.meta.categories,
  };
};

const Products = () => {
  const { isDarkMode } = useGlobalContext();
  const navigate = useNavigate();
  const { noOfPages } = useLoaderData();
  const btnArr = Array.from({ length: noOfPages }, (_, i) => i + 1);
  const [pageIndex, setPageIndex] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (pageNumber) => {
    // console.log(pageNumber);
    setSearchParams({ page: `${pageNumber}` });
    search = `?page=${pageNumber}`;
    setPageIndex(pageNumber);

    navigate(`/products${search}`);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Filters />

      <ProductsContainer />

      <section className="pagination mt-12 flex justify-center sm:justify-end ">
        <div
          className={`${
            isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100"
          } button-container w-1/5 flex gap-6 text-xl    p-2 rounded-lg`}
        >
          {btnArr.map((btnNo) => {
            return (
              <button
                key={btnNo}
                onClick={() => handlePageChange(btnNo)}
                type="button"
                className={`${
                  pageIndex === btnNo
                    ? "text-red-700 bg-slate-300 rounded p-1"
                    : ""
                }  p-1 `}
              >
                {btnNo}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
