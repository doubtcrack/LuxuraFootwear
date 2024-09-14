/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger menu icon
import Logo from './logo.png'; // Update with your logo path

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[1540px] h-[80px] bg-[#e5e5e5] w-full mx-auto px-4">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <img className="h-[60px] w-[60px] sm:h-[120px] sm:w-[120px]" src={Logo} alt="Luxura Logo" />
        </div>

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

        {/* Search Box */}
        <div className="relative flex items-center lg:w-auto w-full">
          <CiSearch className="absolute left-3 text-gray-500" />
          <input
            className="pl-10 border border-gray-300 bg-transparent text-black rounded-full outline-none px-3 py-2 w-full lg:w-[300px]"
            type="text"
            placeholder="Search Products Here..."
          />
        </div>

        {/* Hamburger & Search Box for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleDrawer}>
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* User & Cart Icons for Desktop */}
        <div className="hidden lg:flex h-full items-center justify-center gap-4">
          <FaRegUser className="cursor-pointer" size={26} />
          <CgShoppingCart className="cursor-pointer" size={30} />
        </div>
      </div>

      {/* Side Drawer for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#e5e5e5] z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="p-5 flex flex-col gap-4">
          <button onClick={toggleDrawer} className="self-end">
            <FiX size={30} />
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
          <div className="flex flex-col gap-4 mt-6">
            <FaRegUser className="cursor-pointer" size={26} />
            <CgShoppingCart className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
