import Breadcumb from "../../components/Breadcumb";

const ProductDetails = () => {
  return (
    <>
      <Breadcumb />
      <section className=" flex align-middle justify-center ">
        <div className=" grid grid-cols-3">
          <div>
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
            />
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
            />
            <img
              src="../../../public/assets/bannerimage/images (1).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="../../../public/assets/bannerimage/old-train-forest-illustrationgenerative-ai_221128-11544.jpg"
              alt=""
            />
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
