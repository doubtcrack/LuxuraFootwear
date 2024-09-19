/* eslint-disable react/prop-types */
import React from 'react'
import Pic1 from './2.png'
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Productcard = ({productImage,productLabel1,productLabel2,productTitle,productDescription,productReview,productPrice,productReviews}) => {
//Function to show only 26 words
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  //   Function to show only 9 words in the product title
  const truncateTitle = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <>
      {/* Main Product card */}
      <div className="h-auto w-full sm:w-[48%] lg:w-[326px] bg-[#e5e5e5] shadow-md rounded-md overflow-hidden flex flex-col justify-center p-4">
        <img className="mx-auto w-[50%] md:w-[100%]" src={productImage} alt="" />
        {/* Product Labels */}
        <div className="productLabels flex gap-2">
          <span className="px-2 py-1 rounded-lg text-[10px] bg-green-500">{productLabel1}</span>
          <span className="px-2 py-1 rounded-lg text-[10px] bg-[#f5d4c4]">{productLabel2}</span>
        </div>
        {/* Product Name & Description */}
        <div className="productdesc flex flex-col">
          <h1 className="font-bold mt-2 text-[13px] sm:text-[16px]">{truncateTitle(productTitle, 10)}</h1>
          <p className="text-[10px] sm:text-[14px] text-[#585757] mt-2">{truncateDescription(productDescription, 26)}</p>
        </div>
        {/* Reviews div */}
        <div className="flex gap-2 mt-2 justify-start items-center">
          <FaStar color="#fab73b"/>
          <span className="text-[12px]">{productReviews}</span>
        </div>
        {/* Product Price and CTA */}
        <div className="flex gap-2 w-full items-center justify-between mt-4">
          <span className="text-[19px] font-semibold">{productPrice}</span>
          <div className="flex gap-5 items-center">
            <button className="px-1 sm:px-2 text-[10px] sm:text-[12px] py-1 rounded-md bg-white">Add to Cart</button>
            <FaHeart size={25} color="red"/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Productcard