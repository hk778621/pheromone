import React from "react";
import { GrPlay } from "react-icons/gr";

const Video = () => {
  return (
    <div className="relative group overflow-hidden">
      <div className="bg-[url('/bg-5.jpg')] h-100 w-full bg-cover bg-fixed ">
        <div className="absolute inset-0 bg-black/70 ">
       <div className="text-white flex flex-col justify-center items-center p-20">
        <GrPlay className="text-6xl" />
        <h1 className="uppercase mt-10 text-4xl tracking-widest">watch <span className="font-bold">video</span></h1>
        <p className=" px-35 mt-10 text-center tracking-widest">A business has to be involving, it has to be fun, and it has to exercise your creative instincts. Start where you are. Use what you have. Do what you can.</p>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
