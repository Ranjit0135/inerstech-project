import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import Drawer from "../components/Drawer"; // Adjust the path as needed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <nav className="shadow-md w-full  top-0 left-0 bg-white">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-10">
          <div className="flex items-center justify-between w-full">
            <div className="font-bold text-2xl cursor-pointer text-gray-800 flex items-center font-[poppins]">
              <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
              <img
                src="../../public/assets/bannerimage/inerstech.png"
                alt=""
                className=" h-16"
              />
            </div>
            <div className="md:hidden flex items-center gap-6 ">
              <i className="py-2 px-2 rounded md:hidden flex relative">
                <IoMdCart size={25} />
                <label className="absolute top-2 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                  0
                </label>
              </i>
              <i
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                aria-controls="drawer-navigation"
                onClick={toggleDrawer}
              >
                <TiThMenu />
              </i>
            </div>
            <div className="hidden md:flex items-center">
              <ul className="flex items-center space-x-8">
                <li className="text-xl">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-xl">
                  {" "}
                  <Link to="/about">About</Link>
                </li>
                <li className="text-xl">
                  <Link to="/all-products">Products</Link>
                </li>
                <li className="text-xl">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-xl">
                  <Link to="/contact">Contact</Link>
                </li>

                <i className="py-2 px-2 rounded flex relative">
                  <Link to="/cart">
                    <IoMdCart size={25} />
                    <label className="absolute top-2 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-1">
                      0
                    </label>
                  </Link>
                </i>
                <Link to="/sign-in">
                  <button className="bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded hover:bg-indigo-400 duration-500">
                    SignIn
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
