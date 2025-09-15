import React from "react";

const QuoteCard = () => {
  return (
    <div className="relative group overflow-hidden">
      <div className="bg-[url('/bg-3.jpg')] h-90 w-full bg-cover bg-fixed ">
        <div className="absolute inset-0 bg-black/70 ">
          <div className="text-center items-center justify-center pt-30 px-80">
            <p className="text-white text-lg font-semibold uppercase tracking-widest">
             A business has to be involving, it has to be fun, and it has to exercise your creative instincts. Start where you are. Use what you have. Do what you can.
            </p>
            <h6 className="text-gray-200 text-sm mt-3 small-text">James Daniels</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
