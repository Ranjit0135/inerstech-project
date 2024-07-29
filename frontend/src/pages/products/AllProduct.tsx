import { Pagination, TextInput } from "flowbite-react";
import Breadcumb from "../../components/Breadcumb";
import Card from "../../components/Card";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <Breadcumb />
      <section className="px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3 flex flex-col items-center px-10">
            <div className="flex justify-between w-full mb-4 px-10">
              <span>Showing Result</span>
              <span>Default sorting:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className=" mx-10 md:mr-20 ">
            <div className="mb-4">
              <p className=" p-2 bg-slate-100">Filter By Price</p>
            </div>
            <div className="border-t border-gray-200 py-4">
              <p>Price Range</p>
              {/* Add your price filter component here */}
            </div>
            <div className=" flex flex-col gap-6">
              <p className=" p-2 bg-slate-100">Search the store</p>
              <div className="max-w-md">
                <div className="relative">
                  <TextInput
                    id="text"
                    type="text"
                    placeholder="Search...."
                    required
                  />
                  <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
            <div className=" mt-10">
              <p className=" p-2 bg-slate-100">Product Category</p>
              <ul>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
                <li>mango</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-96">
          <div className="flex overflow-x-auto sm:justify-center w-full ">
            <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
