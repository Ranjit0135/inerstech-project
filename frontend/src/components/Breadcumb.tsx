import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
const Breadcumb = () => {
  return (
    <>
      <div className=" my-10 mx-10 bg-slate-200 p-5">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome} className=" mx-4">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Breadcumb;
