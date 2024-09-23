/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger menu icon
import Logo from './logo.png'; // Update with your logo path
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Hwllo world testing
    <div className="w-full bg-[#e5e5e5] shadow-md lg:fixed lg:z-50 lg:top-0">
      <div className="max-w-[1540px] h-[50px] lg:h-[80px] w-full mx-auto px-4">
        <div className="flex justify-between items-center h-full">

          {/* Mobile Layout: Logo and Hamburger on the left, User and Cart on the right */}
          <div className="lg:hidden flex justify-between items-center w-full">
            {/* Left side: Logo and Hamburger */}
            <div className="flex items-center">
              <img className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]" src={Logo} alt="Luxura Logo" />
              <button onClick={toggleDrawer} className="ml-4">
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>

            {/* Right side: User and Cart Icons */}
            <div className="flex items-center gap-4">
              <FaRegUser className="cursor-pointer" size={18} />
              <CgShoppingCart className="cursor-pointer" size={20} />
            </div>
          </div>

          {/* Center Menus and Search Box for Desktop */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <Link to={'/'}>
              <div>
                <img className="h-[60px] w-[60px] sm:h-[120px] sm:w-[120px]" src={Logo} alt="Luxura Logo" />
              </div>
            </Link>

            {/* Center Menus for Desktop */}
            <ul className="hidden lg:flex items-center justify-center gap-5">
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

            {/* Search Box (Visible on Desktop) */}
            <div className="relative flex items-center w-auto hidden lg:flex">
              <CiSearch className="absolute left-3 text-gray-500" />
              <input
                className="pl-10 border border-gray-300 bg-transparent text-black rounded-full outline-none px-3 py-2 lg:w-[300px]"
                type="text"
                placeholder="Search Products Here..."
              />
            </div>

            {/* User & Cart Icons for Desktop */}
            <div className="hidden lg:flex h-full items-center justify-center gap-4">
              <FaRegUser className="cursor-pointer" size={26} />
              <CgShoppingCart className="cursor-pointer" size={30} />
            </div>
          </div>
        </div>

        {/* Search Box for Mobile */}
        <div className="lg:hidden mt-4 z-50">
          <div className="relative flex items-center w-full">
            <CiSearch className="absolute left-3 text-gray-500" />
            <input
              className="pl-10 text-[12px] border border-gray-300 bg-[#f9f9ec] text-black rounded-full outline-none px-3 py-2 w-full shadow-md"
              type="text"
              placeholder="Search Products Here..."
            />
          </div>
        </div>

        {/* Side Drawer for Mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-[250px] bg-[#e5e5e5] z-50 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 lg:hidden`}
        >
          <div className="p-5 flex flex-col gap-4">
            <button onClick={toggleDrawer} className="self-end">
              <FiX size={20} />
            </button>
            <ul className="flex flex-col gap-5">
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
            {/* User & Cart Icons in Drawer for Mobile */}
            {/* <div className="flex flex-col gap-4 mt-6">
              <FaRegUser className="cursor-pointer" size={26} />
              <CgShoppingCart className="cursor-pointer" size={30} />
            </div> */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
