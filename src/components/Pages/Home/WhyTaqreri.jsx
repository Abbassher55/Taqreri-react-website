import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import ThreeCards from "./ThreeCards";
import TitleSection from "./TitleSection";
export default function WhyTaqreri({ threeCardsArray }) {
  const { content } = useContext(LanguageContext);
  return (
    <TitleSection title={content.why_taqreri}>
      <div className="flex items-center justify-center py-14">
        <ThreeCards itemsArray={threeCardsArray} />
      </div>
    </TitleSection>
  );
}
