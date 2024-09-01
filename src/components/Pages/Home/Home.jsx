import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import Slider from "../../Slider/Slider";

const Home = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
