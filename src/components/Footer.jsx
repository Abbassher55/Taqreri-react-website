import logo from "../assets/imgs/sv-logo.png";
import arrow from "../assets/imgs/submit-arrow.png";
import React, { useContext } from "react";
import { LanguageContext } from "../lang/LanguageContext";
import phoneIcon from "../assets/imgs/phone-icon.png";
import mailIcon from "../assets/imgs/mail-icon.png";
import locationIcon from "../assets/imgs/location-icon.png";
import footerLogo from "../assets/imgs/footer-logo.png";
const footerLinks = [
  {
    icon: phoneIcon,
    linkTo: "tel:+966583071211",
    linkDataEn: "+966583071211",
    linkDataAr: "+966583071211",
  },
  {
    icon: mailIcon,
    linkTo: "mailto:info@taqreri.com",
    linkDataEn: "info@taqreri.com",
    linkDataAr: "info@taqreri.com",
  },
  {
    icon: locationIcon,
    linkTo: "",
    linkDataEn: "Sultana-Medina",
    linkDataAr: "مدينة السلطانة",
  },
];

const Footer = () => {
  const { content } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="flex flex-col gap-12 bg-theme-blue p-3 py-8 md:flex-row md:rounded-t-2xl md:px-11 md:py-12">
        <div className="rounded-3xl bg-white p-8">
          <h3 className="text-3xl font-bold text-gray-400">
            {content.start_your_success_with_taqreri}
          </h3>
          <form action="">
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="email"
                className="my-3 font-bold capitalize text-gray-400"
              >
                {content.email}:
              </label>
              <input
                type="email"
                id="email"
                className="bg-footer-input p-2 text-theme-blue shadow-lg focus:border-theme-blue focus:shadow-xl focus:outline-none ltr:rounded-r-full rtl:rounded-l-full"
              />
            </div>
            <div className="relative mt-2 flex flex-col">
              <label
                htmlFor="password"
                className="my-3 font-bold capitalize text-gray-400"
              >
                {content.your_message}:
              </label>
              <textarea
                placeholder={`${content.type_your_message} .... `}
                rows={5}
                className="rounded-xl bg-footer-input p-2 text-theme-blue shadow-lg focus:border-theme-blue focus:shadow-xl focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="absolute bottom-2 grid size-8 place-items-center rounded-full bg-theme-green text-white ltr:right-2 rtl:left-2"
              >
                <img
                  src={arrow}
                  className="-rotateY-180"
                  alt="Submit arrow image"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-row gap-12">
          <div className="text-white">
            <h3 className="text-xl font-bold capitalize md:text-3xl">
              {content.contact_with}
            </h3>
            <div className="mt-5 flex flex-col space-y-5 md:mt-10 md:space-y-9">
              {footerLinks.map((link) => (
                <div className="flex gap-4 rounded-2xl bg-theme-yellow p-2 font-bold text-white md:px-3 md:py-3">
                  <span className="relative font-bold before:absolute before:-bottom-6 before:h-10 before:w-[1px] before:rotate-45 before:bg-theme-blue after:absolute after:-top-5 after:h-10 after:w-[1px] after:rotate-[135deg] after:bg-theme-blue ltr:pr-3 ltr:before:right-0 ltr:after:right-0 rtl:pl-3 rtl:before:left-0 rtl:before:right-auto rtl:before:rotate-[135deg] rtl:after:left-0 rtl:after:right-auto rtl:after:rotate-45">
                    <img
                      src={link.icon}
                      className="size-3 md:size-6"
                      alt="Contact icon"
                    />
                  </span>
                  <a href={link.linkTo} className="ms-1 text-base md:ms-2">
                    {language === "en" ? link.linkDataEn : link.linkDataAr}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold capitalize md:text-3xl">
              {content.official_sponsor}
            </h3>
            <img
              src={logo}
              className="mt-3 h-20 md:mt-6 md:h-28"
              alt="Taqreri logo"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center justify-between gap-8 bg-theme-blue p-5 text-white md:flex-row md:gap-3">
        <img src={footerLogo} className="h-14" alt="Footer logo" />
        <div className="rtl:text-md font-bold ltr:text-2xl">
          <span className="ltr:me-1 rtl:me-2">{content.footer_rights}</span>
          <span className="text-theme-yellow ltr:me-1 rtl:me-2">
            {content.taqreri}
          </span>
          <span className="ltr:me-1 rtl:me-2">2024</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
