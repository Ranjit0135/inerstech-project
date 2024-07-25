import Breadcumb from "../../components/Breadcumb";
import Card from "../../components/Card";

const AllProduct = () => {
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
          <div>
            <div className="mb-4">
              <p>Filter By Price</p>
            </div>
            <div className="border-t border-gray-200 py-4">
              <p>Price Range</p>
              {/* Add your price filter component here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
