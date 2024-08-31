import React from "react";

const PriceSection = () => {
  return (
    <div className="price-section pl-6 w-5/12">
      <span className="text-2xl font-bold mb-8 block">$192</span>
      <div className="likes flex items-center mb-10">
        <div className="likes-star flex mr-4">
          <img src="./assets/stars.svg" alt="stars" className="w-5" />
          <img src="./assets/stars.svg" alt="stars" className="w-5" />
          <img src="./assets/stars.svg" alt="stars" className="w-5" />
          <img src="./assets/stars.svg" alt="stars" className="w-5" />
          <img
            src="./assets/stars.svg"
            alt="stars"
            className="w-5 opacity-15"
          />
        </div>
        <span className="text-sm text-indigo-500 font-bold">112 Gradient</span>
      </div>
      <div className="colors mb-10">
        <h3 className="text-sm">Color</h3>
        <ul className="color_select flex gap-2 mt-5">
          <button className="w-6 h-6 bg-white border border-blue-700 rounded-full">
            <span className="sr-only">White</span>
          </button>
          <button className="w-6 h-6 bg-gray-200 rounded-full">
            <span className="sr-only">Gray</span>
          </button>
          <button className="w-6 h-6 bg-black rounded-full">
            <span className="sr-only">Black</span>
          </button>
        </ul>
      </div>
      <div className="sizes">
        <div className="title flex justify-between">
          <h3 className="text-sm">Size</h3>
          <button className="text-indigo-500 font-bold">Size Guide</button>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6 mb-6">
          <div className="h-16 flex justify-center items-center border rounded-sm opacity-15 bg-slate-400">
            2XS
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            XS
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            S
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            M
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            L
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            XL
          </div>
          <div className="h-16 flex justify-center items-center border rounded-sm">
            2XL
          </div>
          <div className="h-16 flex justify-center items-center border-2 border-indigo-400 rounded-sm">
            XXL
          </div>
        </div>
        <div className="button">
          <button className="bg-indigo-400 text-white w-full py-2 rounded-sm flex justify-center items-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
