import React from 'react'

const Subcribe = () => {
  return (
    <div className='p-20 bg-orange-50'>
      <div className='text-center tracking-widest uppercase'>
        <h1 className='text-2xl'>Subscribe</h1>
        <p className='mt-10 text-sm text-neutral-500'>Sign up with your email address to receive news and updates.</p>
        <div className="flex items-center justify-center mt-10">
        <div className="flex w-full max-w-md">
        <input
          type="email"
          placeholder="Enter Email..."
          className="px-4 py-2 border border-neutral-400   focus:outline-none"
        />
        <button className="bg-black text-white px-6 uppercase tracking-tighter text-sm  hover:bg-neutral-700 transition-all duration-500 ">
          Subscribe
        </button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Subcribe
