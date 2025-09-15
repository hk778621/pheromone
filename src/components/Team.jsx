import React from "react";
import { teamCard } from "./constants";

const Team = () => {
  return (
    <div className="bg-white p-20">
      <div className="">
        <h1 className="text-2xl font-bold tracking-widest text-neutral-600 text-center mb-10">Our Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {teamCard.map((member, index) => (
            <div key={index} className="bg-white p-5 text-center text-md">
              <h2 className="mt-3 text-neutral-500 uppercase tracking-widest">
                {member.name}
              </h2>
              <img
                src={member.image}
                alt={member.name}
                className="w-70 h-70 mx-auto mt-4 object-cover"
              />
              <div className="flex justify-center space-x-6 mt-5 text-neutral-500">
                {member.icon.map((ic, i) => (
                  <span key={i} className="hover:text-black text-3xl ">
                    {ic}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 uppercase mt-7">{member.job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
