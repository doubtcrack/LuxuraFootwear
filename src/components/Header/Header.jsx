import React from 'react'
import { FaRegUser } from 'react-icons/fa6';
import { CgShoppingCart } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import Logo from './logo.png'

const Header = () => {
  return (
    <>
      <div className="max-w-[1540px] h-[80px] bg-[#e5e5e5] w-full mx-auto px-4">
        <div className="flex justify-evenly items-center h-full">
          {/* Logo DIV */}
          <div><img style={{height:'120px',width:'120px'}} src={Logo} alt="" /></div>
          {/* Center Menus */}
          <ul className=" flex items-center justify-center gap-5">
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li>
            <li>Sports</li>
            <li>New Arrivals</li>
            <li>Best Seller</li>
            <li>Brands</li>
            <li>Sale</li>
            <li>Accessories</li>
            <li>Blogs</li>
          </ul>
          {/* Search Box */}
          <div className="relative flex items-center">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              className="pl-10 border border-gray-300 bg-transparent text-black rounded-full outline-none px-3 py-2 w-full"
              type="text"
              placeholder="Search Products Here..."
            />
          </div>
          {/* User cornner & Cart */}
          <div className="flex h-full items-center justify-center gap-4">
            <FaRegUser className=" cursor-pointer" size={26}/>
            <CgShoppingCart className=" cursor-pointer" size={30} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Header