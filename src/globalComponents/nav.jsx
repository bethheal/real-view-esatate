import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Properties", link: "/properties" },
    { name: "Contact us", link: "/contact-us" },
    { name: "FAQ/Help Center", link: "/help-center" }
  ];

  return (
    <nav className="bg-[#887232] fixed top-5 left-1/2 translate-x-[-50%] w-[80vw] z-20 rounded-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-sm font-semibold whitespace-nowrap text-white">
            Real View
          </span>
        </a>

        <div className="flex md:order-2 items-center gap-3">
          <div className="text-black font-medium text-sm text-center hidden md:flex gap-2">
            <button className="bg-white p-1 rounded-sm">Log in</button>
            <button className="bg-[#ffffe0] p-1 rounded-sm">Sign In</button>
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-[#dbd8d5] focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Responsive Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1 transition-all duration-300`}
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-[#887232]-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-[#887232] md:dark:bg-transparent">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setMenuOpen(false)} // close menu on click (mobile)
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? 'text-white bg-[#ed7d31] md:bg-transparent md:text-[#ed7d31]'
                        : 'text-white md:text-white hover:text-[#ed7d29]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Show auth buttons on mobile */}
            <li className="flex flex-col gap-2 mt-2 md:hidden">
              <button className="bg-white text-black p-1 rounded-sm">Log in</button>
              <button className="bg-[#ffffe0] text-black p-1 rounded-sm">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
