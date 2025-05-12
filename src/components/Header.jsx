import React from 'react';
import Logo from '../assets/Group 16.png';
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <header className="w-full relative bg-white border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto md:px-4 lg:py-5 flex items-center justify-between md:justify-center">
        {/* Left - Contact Us */}
        <div className="md:absolute bg-[#D6C29D] flex items-center top-0 bottom-0  left-0 py-0 ">
          <div className=" text-black px-4 py-2 w-full  flex items-center space-x-2">
            <span>←</span>
            <span>تواصل معنا</span>
          </div>
        </div>

        {/* Center - Home */}
        <Link to="/" className="text-center text-lg  font-bold text-black">
          الرئيسية
        </Link>

        {/* Right - Logo */}
        <Link to="/" className="md:absolute  md:right-4 pr-4 md:pr-0 flex items-center space-x-2 lg:pr-30">
          <img
            src={Logo}
            alt="Prime Signature"
            className="lg:h-auto lg:w-auto h-8 "
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
