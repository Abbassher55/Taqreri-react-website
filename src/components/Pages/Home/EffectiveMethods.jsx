import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import TitleSection from "./TitleSection";
import { effectiveCardsContent } from "./data";
const EffectiveMethods = () => {
  const { language } = useContext(LanguageContext);
  const { content } = useContext(LanguageContext);
  return (
    <TitleSection title={content.effective_methods}>
      <div className="grid gap-10 px-12 py-16 md:grid-cols-3 md:gap-20">
        {effectiveCardsContent.map((card) => (
          <div key={card.key} className="inner-effective-card">
            <p className="mb-0 w-fit rounded-t-3xl bg-theme-blue px-3 text-2xl font-bold capitalize text-theme-yellow md:px-12">
              {language === "en" ? card.titleEn : card.titleAr}
            </p>
            <img
              src={card.img}
              className="-rotateY-180 h-56 w-72 rounded-2xl rounded-tl-none"
              alt="Image for Stores"
            />
          </div>
        ))}
      </div>
    </TitleSection>
  );
};
export default EffectiveMethods;
