import React from "react";
import { teamTheme } from "./constants";

const TeamTheme = () => {
  return (
    <div className="relative group overflow-hidden">
      <div className="bg-[url('/bg-4.jpg')] object-cover w-full h-[250px] bg-fixed bg-cover relative">
        {/* Overlay */}
        <div className="bg-black/70 inset-0 absolute flex items-center justify-center">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white px-6 w-full max-w-6xl mx-auto">
            {teamTheme.map((theme, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <h2 className="text-4xl md:text-5xl tracking-widest">
                  {theme.number}
                </h2>
                <p className="text-base md:text-lg tracking-widest uppercase mt-2">
                  {theme.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTheme;
