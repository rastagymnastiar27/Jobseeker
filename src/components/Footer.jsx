import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rasta Gymnastiar
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
