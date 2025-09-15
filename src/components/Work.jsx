import React from "react";
import { workImage } from "./constants";

const Work = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-2xl tracking-widest">Latest Works</h1>

        <div className="mt-10">
          <ul className="flex space-x-6 uppercase tracking-widest">
            <li>all</li>
            <li>design</li>
            <li>photo</li>
            <li>branding</li>
          </ul>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-4 mt-20">
        {/* Column 1 */}
        <div className="flex flex-col">
          {workImage.map((item, index) =>
            index % 4 === 0 ? (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={item}
                  alt={`work-${index}`}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-500">
                  <h1 className="text-neutral-700 uppercase text-sm tracking-widest">
                    From Image Creative
                  </h1>
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          {workImage.map((item, index) =>
            index % 4 === 1 ? (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={item}
                  alt={`work-${index}`}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-500">
                  <h1 className="text-neutral-700 uppercase text-sm tracking-widest">
                    From Image Creative
                  </h1>
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* Column 3 (special image) */}
        <div className="flex flex-col">
          <div className="relative group overflow-hidden">
            <img
              src={workImage[2]}
              alt="special"
              className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-500">
              <h1 className="text-neutral-700 uppercase text-sm tracking-widest">
                Special Project
              </h1>
              <p className="text-sm text-neutral-600">Lorem ipsum dolor sit</p>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          {workImage.map((item, index) =>
            index % 4 === 3 || index === 6 ? (
              <div key={index} className="relative group overflow-hidden">
                <img
                  src={item}
                  alt={`work-${index}`}
                  className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-500">
                  <h1 className="text-neutral-700 uppercase text-sm tracking-widest">
                    From Image Creative
                  </h1>
                  <p className="text-sm text-neutral-600">
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="bg-orange-50">
      <div className=" p-20 flex justify-between items-center">
        <h1 className="uppercase text-2xl tracking-widest">We believe our work speaks for itself</h1>
        <button className="uppercase border text-sm tracking-widest border-black px-6 py-2 hover:text-neutral-400">view  all  potfolio</button>
      </div>
      </div>
    </div>
  );
};

export default Work;
