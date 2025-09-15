import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "../images/bg-image.jpg";
import { TiPlus } from "react-icons/ti";
import { RiArrowDownSLine } from "react-icons/ri";

const Home = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Services",
    "Portfolio",
    "News",
    "Team",
    "Testimonials",
    "Contact",
    "all demo",
  ];

  return (
    <div className="relative h-screen z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative z-20">
        <nav
          className={`flex justify-between items-center  px-10 py-4 fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled ? "bg-black shadow-md" : "bg-transparent "
          }`}
        >
          <img src="/logo.png" alt="logo" className="w-32 h-auto" />
          <ul className="hidden lg:flex gap-6 text-white font-sm uppercase">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer">
                {item}
                {item === "all demo" && (
                  <TiPlus className="inline-block ml-1" />
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen && (
            <ul className="absolute top-16 right-10 bg-white text-black rounded-lg p-4 shadow-lg flex flex-col gap-4 md:hidden hover:text-neutral-400 transition-colors duration-500">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setmobileDrawerOpen(false)}
                  className="hover:text-gray-400 cursor-pointer transition-colors duration-500"
                >
                  {item}
                  {item === "all demo" && (
                    <TiPlus className="inline-block ml-1" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="pt-32 px-10 text-white">
          <div className="flex flex-col font-poppins justify-center items-center text-center">
            <h1 className="text sm:text-6xl lg:text-7xl font-bold mb-4 mt-20">
              Creative Agency
            </h1>
            <p className="text-lg uppercase tracking-widest mt-10">
              Responsive <span className="font-bold">Multi-Concept</span> Theme
            </p>
            <div className="space-x-4 mt-12 ">
              <button className="uppercase border-2 border-white px-7 py-3 text-sm cursor-pointer hover:text-neutral-400 transition duration-500 shadow-md">
                <a href="#">
                  <RiArrowDownSLine className="inline-block mr-1 w-5 h-5" />
                </a>
                who we are
              </button>
              <button className="uppercase bg-amber-50 text-neutral-800 px-7 py-3 cursor-pointer hover:bg-neutral-300 transition-all duration-500 shadow-md mt-10">
                <a href="#">
                  <RiArrowDownSLine className="inline-block mr-1 w-5 h-5" />
                </a>
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
