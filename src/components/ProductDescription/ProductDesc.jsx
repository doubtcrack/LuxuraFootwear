/* eslint-disable comma-dangle */
import React from 'react'
import { FaStar } from 'react-icons/fa';
import img1 from '../ProductCard/2.png'
import Carousel from 'react-multi-carousel';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import 'swiper/css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const tempData = [
  {
    id: 1,
    image: img1
  },
  {
    id: 2,
    image: img1
  },
  {
    id: 3,
    image: img1
  },
  {
    id: 4,
    image: img1
  },

]

const ProductDesc = () => {
  return (
    <div className="container mx-auto p-4 mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Carousel */}
        <div className="flex-1">
          <Carousel
            loop={false}
            responsive={responsive}

            // customButtonGroup={<ButtonGroup image={data?.image} />}
            className="w-100 text-center"
          >
            {
              tempData.map((item, index) => {
                return (
                  <div key={index} className="">
                    <img className="max-w-[70%] mx-auto" src={item.image} alt="Product-image-caraousel" />
                  </div>
                )
              })
            }

          </Carousel>
          <img className="max-w-[70%] mx-auto" src={img1} alt="Product-image-caraousel" />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 style={{ fontFamily: 'Poppins' }} className="text-[26px] md:text-[40px] font-semibold mb-2">
            Luxura Classic Red High-Top Sneakers - Unisex Casual Canvas Shoes
          </h1>
          {/* Product labels here */}
          <p className="text-gray-600">Brightens Skin | Fades Age Spots | Removes Skin Impurities | Restores Glow</p>
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
          <div className="mt-4 flex items-end gap-4">
            <p className="text-xl md:text-3xl font-semibold">₹<span>599</span></p>
            <span>MRP incl. of all taxes</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.
              Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.
              Step up your style with Luxuras Classic Red High-Top Sneakers. Crafted with durable canvas and a comfortable rubber sole, these unisex shoes offer timeless design and all-day comfort.
            </p>
          </div>

          {/* Size Selection Section */}
          {/* This will come dynamically fromm the backend and the size that is not available will become grays */}
          <div className="mt-6">
            <h2 style={{ fontFamily: 'Poppins' }} className="text-lg font-semibold mb-2">Select Size:</h2>
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
            <h2 style={{ fontFamily: 'Poppins' }} className="text-lg font-semibold mb-2">Available in Colors:</h2>
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