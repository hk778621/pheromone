import React, { useState } from "react";

const Help = () => {
  const images = ["/1.png", "/2.png", "/3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="p-20 ">
      <div className="flex flex-col md:flex-row gap-10 items-center space-x-20">
        <div className="right md:w-1/2 tracking-widest">
          <h1 className="text-2xl mb-4">How can we help?</h1>
          <p className="text-sm">
            Pheromone will look beautiful on any device. Serve high-resolution
            images to devices with retina displays. We have a dedicated support
            team ready to answer your questions. Feel free to contact us to
            provide some feedback on our templates or give us suggestions for
            new themes.
          </p>
          <button className="bg-black px-6 py-2 text-sm text-white uppercase mt-8">
            Learn More
          </button>
        </div>
        <div className="left md:w-1/2 flex flex-col items-center mt-20">
          <img
            src={images[currentIndex]}
            alt="Help"
            className="w-full h-auto rounded-lg"
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
  );
};

export default Help;
