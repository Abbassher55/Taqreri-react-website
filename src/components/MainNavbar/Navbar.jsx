import { NavLink, useLocation } from "react-router-dom";

import React, { useContext, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { LanguageContext } from "../../lang/LanguageContext";

const Navbar = ({ navbarToggler, setNavbar }) => {
  const { content } = useContext(LanguageContext);
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  function openForm() {
    setShowForm(!showForm);
  }
  function closeNavbarOnMobile() {
    if (window.innerWidth < 992) {
      setNavbar(false);
    }
  }
  const isHomeActive =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <nav
      className={`${!navbarToggler ? "hidden" : ""} h-fit w-full flex-col rounded-3xl bg-menu-blue py-3 text-white md:py-8 lg:relative lg:flex lg:w-2/12`}
    >
      <button
        onClick={openForm}
        className="mx-auto flex items-center gap-x-1 rounded-full bg-theme-light-white px-5 py-1 text-xl font-bold text-theme-blue transition-all duration-150 hover:bg-theme-yellow"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
        <span>{content.login}</span>
      </button>
      <div
        className={`login-form relative mt-4 bg-theme-cream p-6 before:absolute before:-top-2 before:left-1/2 before:size-4 before:-translate-x-1/2 before:rotate-45 before:bg-theme-cream ${showForm ? "block" : "hidden"}`}
      >
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="email" className="capitalize text-theme-blue">
              {content.email}:
            </label>
            <input
              type="email"
              id="email"
              className="mx-auto mt-1 block w-full rounded-full bg-white p-2 text-theme-blue shadow-lg focus:border focus:border-theme-blue focus:shadow-xl focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="capitalize text-theme-blue">
              {content.password}:
            </label>
            <input
              type="password"
              id="password"
              className="mx-auto mt-1 block w-full rounded-full bg-white p-2 text-theme-blue shadow-lg focus:border focus:border-theme-blue focus:shadow-xl focus:outline-none"
            />
          </div>
          <div className="text-end">
            <a
              href="#"
              className="text-xs font-bold capitalize text-theme-blue"
            >
              {content.forgot_password}
            </a>
          </div>
          <div>
            <button className="mx-auto flex items-center gap-x-1 rounded-full bg-theme-yellow px-5 py-1 text-xl font-bold text-theme-blue transition-all duration-150 hover:bg-theme-light-white">
              {content.login}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-3 flex flex-col space-y-8">
        <LanguageToggle />
        <ul className="flex flex-col space-y-8 ps-5">
          <li className="w-full">
            <NavLink
              to="/home"
              onClick={closeNavbarOnMobile}
              className={`flex items-center gap-x-4 px-6 text-xl font-bold ${isHomeActive ? "activeLink" : ""}`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>
              {content.home}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `flex items-center gap-x-4 px-6 text-xl font-bold ${isActive ? "activeLink" : ""}`
              }
              onClick={closeNavbarOnMobile}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
              {content.features}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/modules"
              className={({ isActive }) =>
                `flex items-center gap-x-4 px-6 text-xl font-bold ${isActive ? "activeLink" : ""}`
              }
              onClick={closeNavbarOnMobile}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>
              {content.modules}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={closeNavbarOnMobile}
              to="/pricing"
              className={({ isActive }) =>
                `flex items-center gap-x-4 px-6 text-xl font-bold ${isActive ? "activeLink" : ""}`
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>
              {content.pricing}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={closeNavbarOnMobile}
              to="/about_us"
              className={({ isActive }) =>
                `flex items-center gap-x-4 px-6 text-xl font-bold ${isActive ? "activeLink" : ""}`
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>
              {content.about_us}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              onClick={closeNavbarOnMobile}
              to="/contact"
              className={({ isActive }) =>
                `flex items-center gap-x-4 px-6 text-xl font-bold ${isActive ? "activeLink" : ""}`
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </span>
              {content.contact}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
