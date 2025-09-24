import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Properties", link: "/properties" },
    { name: "Contact us", link: "/contact-us" },
    { name: "FAQ/Help Center", link: "/help-center" },
  ];

  return (
    <>
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90vw] z-20 " >
        <div className="navbar bg-[#887232] shadow-sm rounded-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#887232] rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.link}>

                      <li>
                        <a>{item.name}</a>
                      </li>
                    </NavLink>
                  </li>
                ))}
                
              
              </ul>
            </div>
            {/* Logo */}
            <a
              href="/"
              className="text-lg  btn-ghost  font-bold tracking-wide"
            >
              Real View
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.link}>

                      <li>
                        <a>{item.name}</a>
                      </li>
                    </NavLink>
                  </li>
                ))}
             
             
            </ul>
          </div>
          <div className="navbar-end text-black ">
            <a className="btn bg-[#fff6b6] text-black">Log In </a>
                        <a className="btn bg-[#ffffff] text-black">Sign Up </a>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
