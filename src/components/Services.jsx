import React from "react";
import { FiMonitor } from "react-icons/fi";
import { IoIosAnalytics } from "react-icons/io";
import { HiOutlineChartPie } from "react-icons/hi";
import { TfiAlarmClock } from "react-icons/tfi";



const Services = () => {
  const services = [
    {
      title: "ANALYTICS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
      icon: <IoIosAnalytics className="text-8xl mb-4 mx-auto text-neutral-600" />,
    },
    {
      title: "DESIGN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
      icon: <HiOutlineChartPie className="text-8xl mb-4 mx-auto text-neutral-600"/>

    },
    {
      title: "CONSULTING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
      icon: <TfiAlarmClock className="text-8xl mb-4 mx-auto text-neutral-600"/>,
    },
    {
      title: "ADVERTISING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum",
      icon: <FiMonitor className="text-8xl mb-4 mx-auto text-neutral-600" />,
    },
  ];
  return (
    <div className="relative bg-white  py-20 tracking-widest">
      <h1 className="uppercase text-center text-2xl">Our Services</h1>
      <p className="text-center mt-10 text-neutral-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
        pulvinar vestibulum. Donec <br /> eleifend, sem sed dictum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.s
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 text-center mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl "
          >
            {service.icon}
            <h3 className="text-xl text-neutral-500 mt-5">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-10">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
