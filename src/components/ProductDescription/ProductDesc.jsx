/* eslint-disable comma-dangle */
import React from 'react'
import { FaStar } from 'react-icons/fa';
import img1 from './2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imageArray = [
  {
    id:1,
    imgae:img1
  },
  {
    id:2,
    imgae:img1
  },
  {
    id:3,
    imgae:img1
  },
  {
    id:4,
    imgae:img1
  },
]

const ProductDesc = () => {
  return (
    <div className="container mx-auto p-4 mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Carousel */}
        <div className="flex-1">

        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 style={{ fontFamily: 'Poppins' }} className="text-[34px] md:text-[40px] font-semibold mb-2">
                        Luxura Classic Red High-Top Sneakers - Unisex Casual Canvas Shoes
          </h1>
          <div className="mt-4">
            <div className="flex">
              {/* Render filled stars */}
              {[...Array(4)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              {/* Render empty star */}
              <FaStar className="text-gray-300" />
            </div>
            <p style={{ fontFamily: 'Poppins' }} className="mt-4">120 Sold (4.8)</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
                            Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.
            </p>
          </div>

          {/* Size Selection Section */}
          {/* This will come dynamically fromm the backend and the size that is not available will become grays */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Select Size:</h2>
            <div className="flex space-x-2">
              {['6', '7', '8', '9', '10'].map(size => (
                <div key={size} className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-lg font-normal">
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Available Colors Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Available in Colors:</h2>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-[#e5e5e5] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDesc