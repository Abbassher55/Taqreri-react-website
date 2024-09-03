import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import aboutUsHeader from "../../../assets/imgs/about-us-header.png";
import PagesHeader from "../PagesHeader";
const AboutUs = () => {
  const { content } = useContext(LanguageContext);

  return (
    <PagesHeader
      title={content.about_us}
      description={content.about_us_desc}
      image={aboutUsHeader}
    />
  );
};

export default AboutUs;
