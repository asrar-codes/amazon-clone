import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
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
} from "./Pages";
import { Children, createElement } from "react";
import Checkout from "./Pages/Checkout";
import SinglePageError from "./Pages/SinglePageError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <SinglePageError />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <SinglePageError />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <SinglePageError />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
