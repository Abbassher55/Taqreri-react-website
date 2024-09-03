import React from "react";
import Slider from "../../Slider/Slider";
import IntegratedSelling from "./IntegratedSelling";
import IntegratedProducts from "./IntegratedProducts";
import { whyTaqreri, integratedSelling } from "./data.js";
import WhyTaqreri from "./WhyTaqreri.jsx";
import EffectiveMethods from "./EffectiveMethods.jsx";

const Home = () => {
  return (
    <>
      <Slider />
      <WhyTaqreri threeCardsArray={whyTaqreri} />
      <IntegratedSelling threeCardsArray={integratedSelling} />
      <IntegratedProducts />
      <EffectiveMethods />
    </>
  );
};

export default Home;
