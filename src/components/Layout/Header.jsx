import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "소개", path: "/about" },
    { name: "문의하기", path: "/contact" },
  ];

  return (
    <header className="bg-gray-800 py-4 px-6 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-drop-fill text-yellow-400 text-2xl"></i>
          </div>
          <span
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Pacifico, serif" }}
          >
            LeakZero
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-yellow-400"
                  : "text-gray-300"
              } hover:text-yellow-400 transition-colors cursor-pointer font-medium`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="w-6 h-6 flex items-center justify-center md:hidden">
          <i
            className="ri-menu-line text-white text-xl cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-xl border-t border-gray-700">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-400 text-lg`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
