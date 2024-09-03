import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import Slider from "../../Slider/Slider";
import IntegratedSelling from "./IntegratedSelling";
import IntegratedProducts from "./IntegratedProducts";
import { whyTaqreri, integratedSelling } from "./data.js";
import WhyTaqreri from "./WhyTaqreri.jsx";

const Home = () => {
  const { content } = useContext(LanguageContext);
  return (
    <>
      <Slider />
      <WhyTaqreri threeCardsArray={whyTaqreri} />
      <IntegratedSelling threeCardsArray={integratedSelling} />
      <IntegratedProducts />
    </>
  );
};

export default Home;
