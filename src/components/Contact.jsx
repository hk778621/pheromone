import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-20">
      <div className="w-full bg-white px-6 py-16 flex flex-col md:flex-row gap-20 md:gap-20">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold tracking-widest text-gray-500">
            CONTACT US
          </h2>
          <p className="text-gray-500 leading-relaxed tracking-widest">
            Feel free to contact us to provide some feedback on our templates,
            give us suggestions for new templates and themes, or to just say
            hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex items-start space-x-3">
            <span className="text-gray-400 text-xl">
              <FaLocationDot />
            </span>
            <p className="text-gray-500">
              1234 Some Avenue, New York, NY 56789
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-gray-400 text-xl">
              <FaEnvelope />
            </span>
            <p className="text-gray-500">info@youwesite.com</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-gray-400 text-xl">
              <FaPhoneAlt />
            </span>
            <p className="text-gray-500">(123) 456-7890</p>
          </div>
        </div>

        <div className="md:w-1/2 pl-20 sm:pl-0">
          <h2 className="text-2xl font-semibold tracking-wide mb-6">
            SAY HELLO
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300  px-4 py-3 focus:outline-none focus:ring-1"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300  px-4 py-3 focus:outline-none focus:ring-1"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full border border-gray-300  px-4 py-3 focus:outline-none focus:ring-1"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border border-gray-300  px-4 py-3 focus:outline-none focus:ring-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 text-sm tracking-widest hover:bg-neutral-500 transition-all"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
