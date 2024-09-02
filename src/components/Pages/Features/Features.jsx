import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Featues = () => {
  const { content } = useContext(LanguageContext);

  return <h1>{content.introText}</h1>;
};

export default Featues;
