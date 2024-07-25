import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-2">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 text-justify ml-10">
            <h3 className="font-bold text-2xl mb-4 ">Inners Tech</h3>
            <p>
              At Iners Tech, we provide software development, cloud services, IT
              consulting, cybersecurity, digital marketing, and web development
            </p>
            {/* Contact Info */}
            <div className="w-full mt-6">
              <p>
                Email:{" "}
                <a href="mailto:info@company.com" className="hover:underline">
                  rairanjit391@gmail.com
                </a>
              </p>
              <p>Phone: 9813990060</p>
              <p>Address: gwarko, lalitpur</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 ml-10">
            <h3 className="font-bold text-2xl mb-4">Links</h3>
            <ul className=" flex flex-col gap-4">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 ml-10">
            <h3 className="font-bold text-2xl mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <FaFacebook size={25} />
              </li>
              <li>
                <FaInstagram size={25} />
              </li>
              <li>
                <FaTwitter size={25} />
              </li>
              <li>
                <FaLinkedin size={25} />
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
