import Card from "../../components/Card";

const Products = () => {
  return (
    <div className="mt-16 flex flex-col items-center px-4 py-2">
      <h1 className="text-center font-bold text-2xl mb-2">Featured Products</h1>
      <p className="text-center text-xl font-normal mb-10">
        Upgrade your style today with our chic and modern pieces, crafted to
        perfection.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
