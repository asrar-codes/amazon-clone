import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
