import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';


const nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" fixed w-full  z-50 top-0 backdrop-blur-2xl ">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between px-12">

          {/* Logo */}
          <div>
            <span className="text-2xl font-semibold uppercase">Shubham Sharma</span>
            <div className="w-3 h-3 bg-teal-700 rounded-full"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home','about','service','project','contact'].map((link) => (
              <a key={link} href={`#${link}`} className="relative group hover:text-teal-700">
                <span>{link.charAt(0).toUpperCase() + link.slice(1)}</span>
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-teal-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            <a href='#contact'><button className="px-6 py-2 border border-teal-700 rounded cursor-pointer">Contact Me</button></a>
           
          </div>

        



          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {showMenu ? (
              <FaXmark onClick={toggleMenu} className="text-xl cursor-pointer" />
            ) : (
              <FaBars onClick={toggleMenu} className="text-xl cursor-pointer" />
            )}
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {showMenu && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
            {['home','about','service','project','contact'].map((link) => (
              <a key={link} href={`#${link}`} onClick={toggleMenu} className="text-teal-950 text-lg">{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default nav;
