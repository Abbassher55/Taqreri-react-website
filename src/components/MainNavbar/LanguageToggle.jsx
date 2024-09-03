import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="mx-auto flex w-fit rounded-full bg-theme-light-white">
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-5 py-1 capitalize text-theme-blue ${language === "en" ? "rounded-full font-bold ltr:bg-theme-yellow" : ""}`}
      >
        En
      </button>
      <button
        onClick={() => toggleLanguage("ar")}
        className={`px-4 py-1 capitalize text-theme-blue ${language === "ar" ? "rounded-full font-bold rtl:bg-theme-yellow" : ""}`}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageToggle;
