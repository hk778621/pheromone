import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white p-20">
      <div className="max-w-6xl mx-auto py-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="">
          <h2 className="text-lg font-semibold tracking-widest mb-6">ABOUT</h2>
          <p className="text-sm leading-relaxed">
            Thanks for choosing Pheromone for your next project! <br />
            Pheromone is a unique template for building beautiful business or
            personal websites.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-widest mb-6">WHY US</h2>
          <p className="text-sm leading-relaxed">
            Easy to use and coder friendly. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.
            Donec eleifend sem dictum.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-widest mb-6">
            CONTACT
          </h2>
          <ul className="space-y-2 text-sm ">
            <li className="flex gap-3"><FaPhoneAlt /> (123) 456-7890</li>
            <li className="flex gap-3"><FaEnvelope /> info@yourwebsite.com</li>
            <li className="flex gap-3"><FaLocationDot /> 2345 Some Avenue, New York</li>
          </ul>
        </div>
      </div>
      <div className="flex className= border-t-1 border-neutral-400 ">
        <div className="flex justify-between gap-50 items-center mt-20 mb-50">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-neutral-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neutral-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neutral-800">
              <FaGooglePlusG size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neutral-800">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          {/* Bottom */}
          <div className=" text-gray-500 tracking-widest text-sm ">
            TEMPLATE BY FORBETTERWEB
          </div>
          <span className="tracking-widest text-sm text-neutral-500">
            © YOUR-WEBSITE.COM
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
