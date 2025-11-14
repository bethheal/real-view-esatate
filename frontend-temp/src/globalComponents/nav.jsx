import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Properties", link: "/properties" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "FAQ / Help Center", link: "/help-center" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90vw] z-20">
      <div className="navbar bg-[#887232] text-white rounded-xl shadow-md px-4 lg:px-8">
        {/* Left Section - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-[#887232] rounded-lg w-52"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md transition ${
                        isActive
                          ? "bg-white text-[#887232] font-semibold"
                          : "text-white hover:bg-white/10"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold tracking-wide ml-2 hover:text-white/80 transition"
          >
            Real<span className="text-[#fff6b6]">View</span>
          </a>
        </div>

        {/* Center Section - Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition font-medium ${
                      isActive
                        ? "bg-white text-[#887232] font-semibold"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Auth Buttons */}
        <div className="navbar-end flex items-center gap-3">
          <NavLink to="/login" className="bg-[#fff6b6] text-[#887232] font-medium px-4 py-2 rounded-lg hover:bg-[#fff1a8] transition">
            Log In

          </NavLink>
          <NavLink to="signup" className="bg-white text-[#887232] font-medium px-4 py-2 rounded-lg hover:bg-[#f6f6f6] transition">
            Sign Up
          </NavLink >
        </div>
      </div>
    </nav>
  );
};

export default Nav;
