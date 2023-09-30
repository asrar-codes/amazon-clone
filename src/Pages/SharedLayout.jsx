import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Sidebar, Footer, Loading } from "../components";
import { customFetch } from "../utils/customFetch";
const products_url = `https://strapi-store-server.onrender.com/api/products?featured=true`;

let noOfPages;

export const loader = async () => {
  const { data } = await customFetch(`${products_url}`);

  console.log(data.data);
  // index = response.meta.pagination.pageCount
  // console.log(data);
  noOfPages = data.meta.pagination.pageCount;
  return { products: data.data, noOfPages };
};

const SharedLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <Sidebar />

      {isPageLoading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};

export default SharedLayout;
