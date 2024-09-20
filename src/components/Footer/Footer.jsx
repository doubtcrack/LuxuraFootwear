import React from 'react'
import { GoHome } from 'react-icons/go';
import { BiSolidOffer } from 'react-icons/bi';
import { BsBox } from 'react-icons/bs';
import { CiShoppingCart } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';

const Footer = () => {
  return (
    <>
      <div className="max-w-[1540px] mx-auto">
        {/* Mobile Footer */}
        <div className="w-full fixed bottom-0 h-[55px] bg-[#4a4a4a] md:hidden z-10">
          <div className="flex w-full h-full items-center justify-between p-4">
            <div className="flex flex-col items-center justify-center">
              <GoHome color="white" size={25} />
              <span className="text-white text-center text-[12px]">Home</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <BiSolidOffer color="white" size={25} />
              <span className="text-white text-center text-[12px]">Offers</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <BsBox color="white" size={25} />
              <span className="text-white text-center text-[12px]">Orders</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <CiShoppingCart color="white" size={25} />
              <span className="text-white text-center text-[12px]">Cart</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <CiSearch color="white" size={25} />
              <span className="text-white text-center text-[12px]">Search</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer