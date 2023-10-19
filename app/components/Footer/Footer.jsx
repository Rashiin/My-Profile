import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-gray-200">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-2xl font-bold text-orange-500">LOGO</span>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg mb-2">Contact Information:</p>
          <p className="mb-2">Email: farahanirashin@gmail.com</p>
          <p>Phone: +98 (123) 456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-orange-500 transition-colors duration-300">
            Home
          </a>
          <a href="#" className="text-xl hover:text-orange-500 transition-colors duration-300">
            Projects
          </a>
          <a href="#" className="text-xl hover:text-orange-500 transition-colors duration-300">
            About
          </a>
          <a href="#" className="text-xl hover:text-orange-500 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
