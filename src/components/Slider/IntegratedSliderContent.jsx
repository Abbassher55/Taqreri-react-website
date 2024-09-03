import React, { useContext } from "react";
import { LanguageContext } from "../../lang/LanguageContext";

export default function IntegratedSliderContent({ integratedCardData }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="integrate-item-card relative">
      <img src={integratedCardData.img} className="h-60 w-full" alt="Slider" />
      <h3 className="gradient-blue-to-black absolute -top-4 w-full rounded-full p-3 text-center text-xl font-bold text-white">
        {language === "en"
          ? integratedCardData.titleEn
          : integratedCardData.titleAr}
      </h3>
    </div>
  );
}
