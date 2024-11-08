import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import AboutUs from "./components/AboutUs/AboutUs";
import Loading from "./components/Loading/Loading";
import MoreInfo from "./components/MoreInfo/MoreInfo";

import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  const Cups = lazy(() => import("./components/Cups/Cups"));
  return (
    <div className="main__container">
      <Router>
        <Navbar />
        <CartContextProvider>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/cups" element={<Cups />} />
              <Route path="/cups/:id" element={<MoreInfo />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
