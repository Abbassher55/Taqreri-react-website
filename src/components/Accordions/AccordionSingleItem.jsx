import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";
const AccordionSingleItem = ({
  titleEn,
  titleAr,
  descEn,
  descAr,
  isOpen,
  onClick,
  accordionImg,
  isFirst,
  isLast,
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative my-0 border-gray-200 py-0">
      <button
        onClick={onClick}
        className={`relative z-10 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 text-2xl font-bold text-theme-blue hover:bg-gray-100 hover:text-opacity-75 ${isOpen ? "" : "mb-4"}`}
      >
        <span>{language === "en" ? titleEn : titleAr}</span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden rounded-3xl ${isOpen ? "-mt-12 max-h-screen pt-14 transition-[max-height] duration-300 ease-in-out" : "max-h-0"}`}
      >
        <div
          className={`mb-4 rounded-3xl bg-half-blue bg-opacity-75 p-8 pb-4 text-xl text-white ${isOpen ? "-mt-12 max-h-screen pt-14 transition-[max-height] duration-300 ease-in-out" : "max-h-0"}`}
        >
          {language === "en" ? descEn : descAr}
        </div>
      </div>
      <div
        className={`absolute top-0 h-full ${isFirst ? "rounded-t-3xl" : ""} ${isLast ? "rounded-b-3xl" : ""} ${isLast && !isOpen ? "h-auto" : ""} max-md:bg-white ltr:-left-24 rtl:-right-24`}
      >
        <div
          className={`${isOpen ? "bg-theme-yellow" : "bg-theme-blue"} rounded-full p-2`}
        >
          <img src={accordionImg} className="size-10" alt="Accordion image" />
        </div>
      </div>
    </div>
  );
};
export default AccordionSingleItem;
