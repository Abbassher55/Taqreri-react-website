import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import ThreeCards from "./ThreeCards";
import integratedImg from "../../../assets/imgs/integrated-section.png";
export default function IntegratedSection({ threeCardsArray }) {
  const { content } = useContext(LanguageContext);
  return (
    <section className="bg-section-light-blue container my-4 rounded-xl md:my-2">
      <div className="flex items-center py-14">
        <div className="md:w-8/12">
          <h2 className="mb-4 rounded-b-3xl p-4 text-lg font-black text-theme-blue md:rounded-b-[3rem] md:p-7 md:text-3xl">
            {content.integrated_selling}
          </h2>
          <ThreeCards itemsArray={threeCardsArray} />
        </div>
        <div className="lg:w-4/12">
          <img
            src={integratedImg}
            className="md:h-92"
            alt="Integrated section image"
          />
        </div>
      </div>
    </section>
  );
}
