import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="flex mx-auto w-fit bg-theme-light-white rounded-full">
      <button onClick={() => toggleLanguage("en")} className={`px-5 py-1 capitalize text-theme-blue ${language === "en" ? "ltr:bg-theme-yellow rounded-full" : ""}`}>
        En
      </button>
      <button onClick={() => toggleLanguage("ar")} className={`px-4 py-1 capitalize  text-theme-blue ${language === "ar" ? "rtl:bg-theme-yellow rounded-full" : ""}`}>
        عربي
      </button>
    </div>
  );
};

export default LanguageToggle;
