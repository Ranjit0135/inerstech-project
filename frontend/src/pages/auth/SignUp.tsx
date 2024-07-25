import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";

const SignUp = () => {
  return (
    <>
      <Breadcumb />
      <div className=" flex align-middle justify-center  p-5">
        <form className="flex max-w-md flex-col gap-7 rounded-md border sm:w-[50vw] p-6">
          <p className=" font-bold text-xl">Register your account</p>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your name" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="enter your name"
              required
              shadow
            />
          </div>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div> */}
          <Button
            type="submit"
            className=" text-white bg-red-800 flex align-middle justify-center "
          >
            Register new account
          </Button>
          <p>
            Already have account?{" "}
            <label className="underline text-blue-800 cursor-pointer">
              <Link to="/sign-in">Login</Link>
            </label>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
