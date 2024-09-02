import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const AboutUs = () => {
  const { content } = useContext(LanguageContext);

  return <h1>{content.about_us}</h1>;
};

export default AboutUs;
