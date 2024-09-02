import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import ThreeCards from "./ThreeCards";

export default function TitleSection({ threeCardsArray }) {
  const { content } = useContext(LanguageContext);
  return (
    <section className="bg-section-light-blue container my-4 rounded-xl md:my-8">
      <h2 className="bg-title-light mx-auto w-fit rounded-b-3xl p-4 text-center text-lg font-black text-theme-blue md:rounded-b-[3rem] md:p-7 md:text-2xl">
        {content.why_taqreri}
      </h2>
      <div className="flex items-center justify-center py-14">
        <ThreeCards itemsArray={threeCardsArray} />
      </div>
    </section>
  );
}
