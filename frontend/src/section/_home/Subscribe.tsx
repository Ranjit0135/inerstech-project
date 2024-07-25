const Subscribe = () => {
  return (
    <>
      <div className=" mt-16 bg-slate-200 pb-12 ">
        <div className=" flex flex-col align-middle items-center gap-4 pt-10 p-5">
          <h1 className=" font-bold text-2xl "> Newsletter</h1>
          <p className=" text-justify">
            Subscribe to our newsletters and don’t miss new arrivals, the latest
            fashion updates and our promotions
          </p>
          <input
            className=" mt-2 p-2 w-60 md:w-96 rounded-md"
            placeholder=" enter your email......"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
