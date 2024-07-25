import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import AllProduct from "../pages/products/AllProduct";
import ProductDetails from "../pages/products/ProductDetails";

const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/all-products" element={<AllProduct />} />
          <Route path="/products-details" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default CustomRoutes;
