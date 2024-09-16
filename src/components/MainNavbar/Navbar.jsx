import { NavLink, useLocation } from "react-router-dom";
import React, { useContext, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { LanguageContext } from "../../lang/LanguageContext";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
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
        <motion.ul
          className="flex flex-col space-y-8 ps-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.li className="w-full">
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
                  className="size-6"
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
          </motion.li>
          <motion.li variants={item}>
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
                  className="size-6"
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
          </motion.li>
          <motion.li variants={item}>
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
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </span>
              {content.modules}
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
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
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </span>
              {content.pricing}
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
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
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </span>
              {content.about_us}
            </NavLink>
          </motion.li>
          <motion.li variants={item}>
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
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
              </span>
              {content.contact}
            </NavLink>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
