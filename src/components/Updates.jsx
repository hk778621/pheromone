import React from 'react'
import { BsInfinity } from "react-icons/bs";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaTv } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Updates = () => {
   const features = [
    {
      title: "Lifetime Updates",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      icon: BsInfinity,
    },
    {
      title: "Lightweight",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      icon: TfiAlarmClock,
    },
    {
      title: "Responsive",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      icon: FaTv,
    },
    {
      title: "Multi-Purpose",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      icon: HiOutlineEmojiSad,
    },
  ];

  return (
    <main className='relative '>
    <div  className="bg-[url('/bg-2.jpg')] bg-cover inset-0 bg-center  w-full" >
    <div className='absolute bg-black/70 w-full h-full inset-0'/>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white drop-shadow-2xl gap-6 p-20">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex flex-col text-white items-center text-center p-6  hover:shadow-lg transition"
          >
            <Icon className="text-7xl text-white mb-4" />
            <h3 className="text-xl font-semibold mb-8 mt-4">{feature.title}</h3>
            <p className="text-white text-1xl ">{feature.description}</p>
          </div>
        );
      })}
    </div>
      
    </div>
    </main>
  )
}

export default Updates
