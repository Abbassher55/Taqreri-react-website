import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import Slider from "../../Slider/Slider";
import TitleSection from "./TitleSection";
import IntegratedSection from "./IntegratedSection";
import { whyTaqreri, integratedSelling } from "./data.js";

const Home = () => {
  const { content } = useContext(LanguageContext);
  return (
    <>
      <Slider />
      <TitleSection threeCardsArray={whyTaqreri} />
      <IntegratedSection threeCardsArray={integratedSelling} />
    </>
  );
};

export default Home;
