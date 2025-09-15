import React from 'react'
import { news } from "./constants";
const News = () => {
  return (
    <div className='p-20 mt-10'>
      <div className='uppercase flex justify-between tracking-widest'>
        <h1 className='text-2xl tracking-widest'>news</h1>
        <h3 className='text-sm hover:text-neutral-400 transition-all duration-500'>see all news</h3>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {news.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden transition duration-500"
          >
            {/* Direct Image */}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-50 object-cover "
            />

            {/* Text Content */}
            <div className="mt-5">
              <h2 className="text-md font-semibold uppercase tracking-widest">{item.text}</h2>
              <p className="text-gray-600 text-sm mt-2 tracking-widest">{item.description}</p>
              <button className="mt-4 uppercase text-sm font-semibold py-2 px-4 text-black bg-neutral-300 tracking-widest transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
