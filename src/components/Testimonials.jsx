import React, { useState } from 'react';
import { testimonials } from './constants';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="tracking-widest uppercase text-2xl mb-10">
            Testimonials
          </h1>

          {/* Image */}
          <img
            src={testimonials[current].img}
            alt="testimonial"
            className="w-28 h-28 rounded-full mb-6 object-cover"
          />

          {/* Text */}
          <p className="tracking-wider uppercase text-sm text-neutral-600 mb-6 text-center">
            {testimonials[current].text}
          </p>

          {/* Role + Name */}
          <h6 className="text-neutral-400 uppercase text-sm">
            {testimonials[current].role}
          </h6>
          <h3 className="font-semibold small-text -mt-1">
            {testimonials[current].name}
          </h3>

          {/* Dots Navigation */}
          <div className="flex mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition ${
                  current === index ? "bg-neutral-700" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
