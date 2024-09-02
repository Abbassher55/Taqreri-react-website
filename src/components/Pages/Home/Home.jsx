import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import Slider from "../../Slider/Slider";

const Home = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div className="md:w-8/12 lg:w-10/12">
      <Slider />
    </div>
  );
};

export default Home;
