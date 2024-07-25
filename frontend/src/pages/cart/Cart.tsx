import Breadcumb from "../../components/Breadcumb";
import { Checkbox, Label } from "flowbite-react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <>
      <Breadcumb />
      <div className="relative mx-5 md:mx-20 mb-40">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-b-2 mb-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="flex-col md:flex-row gap-4 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="../../../public/assets/bannerimage/images (1).jpg"
                  alt=""
                  className=" h-16"
                />
                <span> Apple MacBook Pro 17"</span>
              </th>

              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">
                <input type="number" defaultValue="1" className=" w-16 h-8" />
              </td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="gap-4 flex-col md:flex-row items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="../../../public/assets/bannerimage/images (1).jpg"
                  alt=""
                  className=" h-16"
                />
                <span> Apple MacBook Pro 17"</span>
              </th>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6">
                <input type="number" defaultValue="1" className=" w-16 h-8" />
              </td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <RiDeleteBin6Line />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="gap-4 flex-col md:flex-row items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="../../../public/assets/bannerimage/images (1).jpg"
                  alt=""
                  className=" h-16"
                />
                <span> Apple MacBook Pro 17"</span>
              </th>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">
                <input type="number" defaultValue="1" className=" w-16 h-8" />
              </td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <RiDeleteBin6Line />
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" flex mb-2">
          <button className=" p-2 border w-28 bg-red-950 text-white rounded-md focus:bg-red-900">
            Clear
          </button>
        </div>
        <div className=" flex md:justify-end mb-4">
          <div className=" flex flex-col w-[500px] h-96 border p-8">
            <p className=" text-xl font-semibold pb-4">Cart Totals</p>
            <div className=" flex justify-between border-b-2 py-3 font-semibold">
              <p>Subtotal</p>
              <label>$35</label>
            </div>
            <div className=" py-4 border-b-2">
              <p>Shipping</p>
              <div className="flex flex-col gap-2 mt-6">
                <div className="flex gap-3 items-center">
                  <Checkbox id="age" />
                  <Label htmlFor="age" className=" text-lg font-normal">
                    Free Shipping
                  </Label>
                </div>
                <div className="flex gap-3 items-center ">
                  <Checkbox id="age" />
                  <Label htmlFor="age" className=" text-lg font-normal">
                    Local Delevery
                  </Label>
                </div>
                <div className="flex gap-3 items-center">
                  <Checkbox id="age" />
                  <Label htmlFor="age" className=" text-lg font-normal">
                    Local Pickup
                  </Label>
                </div>
              </div>
            </div>
            <div className=" flex justify-between py-6 font-semibold">
              <p>Total</p>
              <label>$35</label>
            </div>
            <div className=" flex items-end justify-end py-5">
              <button className=" p-2 border w-40 bg-red-950 text-white rounded-md focus:bg-red-900">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
