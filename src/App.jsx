import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  SharedLayout,
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  CheckOut,
  NotFound,
  Login,
  SignUp,
  SinglePageError,
} from "./Pages";
import { loader as fetchFeaturedProductsLoader } from "./Pages/SharedLayout";
import { loader as singleProductLoader } from "./Pages/SingleProduct";
import { loader as fetchProductsLoader } from "./Pages/Products";
// export const products_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchFeaturedProductsLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "products",
        element: <Products />,
        loader: fetchProductsLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "products/:id",
        loader: singleProductLoader,
        element: <SingleProduct />,
        errorElement: <SinglePageError />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <SinglePageError />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
        errorElement: <SinglePageError />,
      },

      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <SinglePageError />,
  },
  {
    path: "signup",
    element: <SignUp />,
    errorElement: <SinglePageError />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
