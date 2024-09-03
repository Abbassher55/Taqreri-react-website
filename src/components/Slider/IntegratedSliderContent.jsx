import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

export default function IntegratedSliderContent({ integratedCardData }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="integrate-item-card relative">
      <img
        src={integratedCardData.img}
        className="w-full object-cover"
        alt="Slider"
      />
      <h3 className="absolute top-0 w-full rounded-full bg-theme-blue p-3 text-center font-bold text-white">
        {language === "en"
          ? integratedCardData.titleEn
          : integratedCardData.titleAr}
      </h3>
    </div>
  );
}
