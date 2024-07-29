// import { Button } from "flowbite-react";
// import Breadcumb from "../../components/Breadcumb";
// import { HiShoppingCart } from "react-icons/hi";
// import { useState } from "react";
// import Card from "../../components/Card";

// const ProductDetails = () => {
//   const [activeTab, setActiveTab] = useState("description");
//   return (
//     <>
//       <Breadcumb />
//       <section className=" flex flex-col align-middle justify-center mx-10 ">
//         <div className=" grid grid-cols-3 gap-40">
//           <div className=" flex flex-col gap-10 justify-end items-end pr-5">
//             <img
//               src="../../../public/assets/bannerimage/images (1).jpg"
//               alt=""
//               className=" h-20 "
//             />
//             <img
//               src="../../../public/assets/bannerimage/images (1).jpg"
//               alt=""
//               className=" h-20 "
//             />
//             <img
//               src="../../../public/assets/bannerimage/images (1).jpg"
//               alt=""
//               className=" h-20 "
//             />
//           </div>
//           <div className="">
//             <img
//               src="../../../public/assets/bannerimage/old-train-forest-illustrationgenerative-ai_221128-11544.jpg"
//               alt=""
//             />
//           </div>
//           <div>
//             <div>
//               <p>Ipone 15 pro</p>
//               <label>$20 - $50</label>
//               <p>
//                 The iPhone 15 offers a sleek design, advanced camera, A16 chip,
//                 and 5G connectivity for a fast, smooth experience.
//               </p>
//             </div>
//             <div>
//               <p>
//                 color{" "}
//                 <select>
//                   <option>red </option>
//                   <option>yellow </option>
//                   <option>blue </option>
//                 </select>
//               </p>
//               <p>
//                 Sku<label>014</label>
//               </p>
//               <p>
//                 category:<label>Headphones & Earphones</label>
//               </p>
//               <p>
//                 Tags:<label>Bluetooth, Microphone, Wireless</label>
//               </p>
//               <div className="flex">
//                 <input type="number" className=" w-16 " />
//                 <div className="flex flex-wrap gap-2 ">
//                   <Button className=" text-black">
//                     Add To Cart
//                     <HiShoppingCart className="ml-4 h-5 w-8 border-l-2 pl-2 " />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" border-y-2 my-20 mx-20">
//           <ul className=" flex justify-evenly gap-10 p-8">
//             <li>share on facebook</li>
//             <li>share on twitter</li>
//             <li>share on linkedin</li>
//           </ul>
//         </div>

//         <div className="flex align-middle justify-center gap-4 mb-16 border-b-2 pb-6 mx-60">
//           <div>
//             <ul className=" w-60 flex flex-col gap-1">
//               <li
//                 onClick={() => setActiveTab("description")}
//                 className=" bg-slate-100 p-2 rounded-sm"
//               >
//                 Description
//               </li>

//               <li
//                 onClick={() => setActiveTab("reviews")}
//                 className=" bg-slate-100 p-2 rounded-sm"
//               >
//                 Reviews
//               </li>
//             </ul>
//           </div>
//           <div className=" w-[70%]">
//             {activeTab === "description" && (
//               <div>
//                 <h2 className=" font-bold text-xl">About Product</h2>
//                 <p>
//                   This is the product descriptionwhdbkjdskch wjeweijom
//                   dvjnjimoiuboibnn.
//                 </p>
//               </div>
//             )}

//             {activeTab === "reviews" && (
//               <div>
//                 <h2 className=" font-bold text-xl">Reviews</h2>
//                 <p>These are the product reviews.</p>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className=" mx-40">
//           <h2 className=" text-xl font-bold pb-6">Releted Product</h2>
//           <div className=" grid grid-cols-3 gap-4">
//             <Card />
//             <Card />
//             <Card />
//             <Card />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetails;
import { Button } from "flowbite-react";
import Breadcumb from "../../components/Breadcumb";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import Card from "../../components/Card";
import Review from "../../components/Review";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <Breadcumb />
      <section className="flex flex-col align-middle justify-center mx-10">
        <div className="flex gap-5 mx-20">
          <div className="flex flex-col gap-5 pr-5">
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
              className="h-20"
            />
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
              className="h-20"
            />
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
              className="h-20"
            />
          </div>
          <div className="flex w-[55vw] h-[35vw]">
            <img
              src="../../../public/assets/bannerimage/old-train-forest-illustrationgenerative-ai_221128-11544.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10 ml-4">
            <div className=" flex flex-col gap-3">
              <p className=" font-bold text-xl">iPhone 15 Pro</p>
              <label className=" font-bold ">$20 - $50</label>
              <p>
                The iPhone 15 offers a sleek design, advanced camera, A16 chip,
                and 5G connectivity for a fast, smooth experience.
              </p>
            </div>
            <div>
              <p>
                Color{" "}
                <select>
                  <option>Red</option>
                  <option>Yellow</option>
                  <option>Blue</option>
                </select>
              </p>
              <p className=" pt-10">
                Sku <label>014</label>
              </p>
              <p>
                Category: <label>Headphones & Earphones</label>
              </p>
              <p>
                Tags: <label>Bluetooth, Microphone, Wireless</label>
              </p>
              <div className="flex gap-6 pt-10 ">
                <input type="number" defaultValue="1" className="w-16" />
                <Button className=" flex items-center bg-red-800 text-white">
                  Add To Cart
                  <HiShoppingCart
                    size={20}
                    className="ml-2 h-5 w-5 border-l-2 pl-1 "
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-y-2 my-20 mx-20">
          <ul className="flex justify-evenly gap-10 p-8">
            <li>Share on Facebook</li>
            <li>Share on Twitter</li>
            <li>Share on LinkedIn</li>
          </ul>
        </div>

        <div className="flex align-middle justify-center gap-4 mb-16 border-b-2 pb-6 mx-60">
          <div>
            <ul className="w-60 flex flex-col gap-1">
              <li
                onClick={() => setActiveTab("description")}
                className="bg-slate-100 p-2 rounded-sm"
              >
                Description
              </li>
              <li
                onClick={() => setActiveTab("reviews")}
                className="bg-slate-100 p-2 rounded-sm"
              >
                Reviews
              </li>
            </ul>
          </div>
          <div className="w-[70%]">
            {activeTab === "description" && (
              <div>
                <h2 className="font-bold text-xl">About Product</h2>
                <p>
                  This is the product description. More details about the
                  product can be found here.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h2 className="font-bold text-xl">Reviews</h2>
                <Review />
              </div>
            )}
          </div>
        </div>
        <div className="mx-40 pb-4">
          <h2 className="text-xl font-bold pb-6">Related Products</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
