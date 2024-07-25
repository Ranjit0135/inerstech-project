import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const SignIn = () => {
  return (
    <>
      <Breadcumb />
      <div className=" flex align-middle justify-center  p-5">
        <form className="flex max-w-md flex-col gap-7 rounded-md border sm:w-[50vw] p-6 ">
          <p className=" font-bold text-xl">Login your account</p>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="enter your email..."
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>

          <Button
            type="submit"
            className=" text-white bg-red-800 flex align-middle justify-center "
          >
            Login
          </Button>
          <p>
            Don't have account?{" "}
            <label className="underline text-blue-800 cursor-pointer">
              <Link to="/sign-up">Register</Link>
            </label>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
