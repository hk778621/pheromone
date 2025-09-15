import React from 'react'
import { choose } from './constants'
const Choose = () => {
  return (
    <div className='bg-white'>
      <div className='p-20'>
        <div className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl text-center tracking-widest uppercase mb-10">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {choose.map((item, index) => (
            <div
              key={index}
              className=" mt-20 flex flex-col items-center text-center tracking-widest "
            >
              <div className="text-7xl text-neutral-600 mb-8">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-8">{item.text}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Choose
