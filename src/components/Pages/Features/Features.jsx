import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
const Features = () => {
  const { content } = useContext(LanguageContext);

  return (
    <PagesHeader
      title={content.features}
      description={content.fetures_desc}
      image={contactHeader}
    />
  );
};

export default Features;
