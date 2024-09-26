import React from 'react'
import img1 from '../ProductCard/2.png'

const ProductByCategory = () => {
  return (
    <>
      <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-auto object-cover max-w-[50%]"
          src={img1}
          alt="Product"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Product Title</h2>
          <div className="flex space-x-2 mb-4">
            <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Label 1</span>
            <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Label 2</span>
            <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Label 3</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Buy Now
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductByCategory