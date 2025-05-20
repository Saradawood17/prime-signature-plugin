import React from 'react';
import Logo from '../assets/Screenshot_2025-05-12_111254__1_-removebg-preview 1.svg?react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="  h-[70px] flex items-center justify-between relative">

        {/* Contact Us - sticks to the left, fills height */}
        <div className="h-full bg-[#D6C29D] flex items-center px-4">
          <span className="text-black text-xl mr-2">←</span>
          <span className="text-black text-xl"> <a href="#contact">Contact Us</a></span>
        </div>

        {/* Logo - sticks to the right */}
        <Link
          to="/"
          className="h-full py-4 pr-4 flex items-center"
        >
          <Logo className="h-full w-auto" />
        </Link>

      </div>
    </header>
  );
}

export default Header;
