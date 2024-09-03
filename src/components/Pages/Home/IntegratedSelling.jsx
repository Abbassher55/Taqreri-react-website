import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import ThreeCards from "./ThreeCards";
import integratedImg from "../../../assets/imgs/integrated-section.png";
export default function IntegratedSelling({ threeCardsArray }) {
  const { content } = useContext(LanguageContext);
  return (
    <section className="container my-4 rounded-xl bg-section-light-blue md:my-2">
      <div className="flex flex-col-reverse items-center py-14 lg:flex-row">
        <div className="w-full lg:w-8/12">
          <h2 className="mb-4 rounded-b-3xl p-4 text-center text-lg font-black text-theme-blue md:rounded-b-[3rem] md:p-7 md:text-3xl lg:text-start">
            {content.integrated_selling}
          </h2>
          <ThreeCards itemsArray={threeCardsArray} />
        </div>
        <div className="w-full lg:w-4/12">
          <img
            src={integratedImg}
            className="md:h-92 -rotateY-180"
            alt="Integrated section image"
          />
        </div>
      </div>
    </section>
  );
}
