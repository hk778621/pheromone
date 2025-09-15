import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const About = () => {
  const skills = [
    { name: "Design", value: 93 },
    { name: "Programming", value: 82 },
    { name: "Photography", value: 68 },
  ];
  const images = [
    "/6.png",
    "/7.png",
    "/8.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <about className="bg-white relative  tracking-widest ">
      <main  className="px-20">
      <div className=" studio flex flex-col md:flex-row gap-10 items-center md:items-start pt-20">
        <div className="left md:w-1/2 space-y-4">
          <h1 className="text-3xl text-neutral-700">About Studio</h1>
          <p className="text-gray-600 mt-10">
            The collaborative process of web development requires close
            integration of technology and design - two disciplines that inform
            one another. We make hip and exciting web sites. Big and Small.
            Concept development, interface design, production management.
          </p>
          <h3 className="small-text font-semibold mt-0">Ethan Pheromone</h3>
          <div >
            <h1 className="text-3xl text-neutral-700 pt-30">Modern Portfolio</h1>
            <p className="text-gray-600 pb-4  mt-10">
              Amazing solution for portfolio websites which you can fit for
              freelancers, photographers or agency showcase. Pheromone easily
              and efficiently scales your project with one code base.
            </p>
            <button className="px-5 py-2 bg-black text-white uppercase text-sm hover:bg-neutral-500 transition duration-500 mt-5">
              check it out
            </button>
          </div>
        </div>
        <div className="right md:w-1/2 flex flex-col items-center mt-20">
          <div className="flex justify-center gap-8 flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center w-24">
                <CircularProgressbar
                  value={skill.value}
                  strokeWidth={2}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    textSize: "14px",
                    pathColor: "#4a5759",
                    textColor: "#111",
                    trailColor: "#d6d6d6",
                  })}
                />
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-30 w-full flex flex-col items-center">
            <img
              src={images[currentIndex]}
              alt="slider"
              className="w-110 h-86 object-cover rounded-lg shadow-lg"
            />
            <div className="flex gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentIndex === index ? "bg-neutral-700" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      </main>
    </about>
  );
};

export default About;
