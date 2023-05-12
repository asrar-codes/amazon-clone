import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";
import Mobiles from "./Pages/Mobiles";
import Electronics from "./Pages/Electronics";
import Prime from "./Pages/Prime";
import Kitchen from "./Pages/Kitchen";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="prime" element={<Prime />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
