import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

export default function ThreeCards({ itemsArray }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="grid w-full gap-16 md:grid-cols-3 md:gap-3">
      {itemsArray.map((cardItem) => (
        <div
          key={cardItem.key}
          className="flex flex-col items-center justify-center"
        >
          <img src={cardItem.img} className="size-24" alt={cardItem.titleEn} />
          <h2 className="mt-6 font-bold capitalize text-theme-blue md:text-2xl">
            {language === "en" ? cardItem.titleEn : cardItem.titleAr}
          </h2>
        </div>
      ))}
    </div>
  );
}
