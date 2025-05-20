import React from 'react';
import Logo from '../assets/Screenshot_2025-05-12_111254__1_-removebg-preview 1.svg?react';

 function Footer() {
  return (
    <footer className="bg-[#FAF8F3]  text-gray-800 text-sm pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4  gap-6 text-center ">
     
        {/* Spacer on medium screens */}
        <div className="hidden md:block" />

        {/* Logo and Contact Info - Column 4 */}
        <div className="flex flex-col text-start  space-y-2">
          {/* <img src={Logo} alt="Prime Signature" className="h-10" /> */}
          <Logo className="h-10" />
          <p>3891 ranchview dr. richardson, california 62639</p>
          <p>kenzi@example.com</p>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      <div className="text-center max-w-7xl mx-auto px-4 text-xs">
        3891 ranchview dr. richardson, california 62639
      </div>
    </footer>
  );
}
export default Footer;