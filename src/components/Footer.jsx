import React from 'react';
import Logo from '../assets/Group 16.png';

 function Footer() {
  return (
    <footer className="bg-[#FAF8F3]  text-gray-800 text-sm pt-8 pb-4">
      <div className="max-w-7xl py-12 mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-right">
        {/* Links - Column 1 */}
        <div>
          <h3 className="font-bold mb-2">الرئيسية</h3>
          <ul className="space-y-1">
            <li>الرئيسية</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        {/* Links - Column 2 */}
        <div>
          <h3 className="font-bold mb-2">الشركة</h3>
          <ul className="space-y-1">
            <li>من نحن</li>
            <li>الخدمات</li>
          </ul>
        </div>

        {/* Spacer on medium screens */}
        <div className="hidden md:block" />

        {/* Logo and Contact Info - Column 4 */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <img src={Logo} alt="Prime Signature" className="h-10" />
          <p>3891 ranchview dr. richardson, california 62639</p>
          <p>kenzi@example.com</p>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      <div className="text-start max-w-7xl mx-auto px-4 text-xs">
        3891 ranchview dr. richardson, california 62639
      </div>
    </footer>
  );
}
export default Footer;