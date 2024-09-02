import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Pricing = () => {
  const { content } = useContext(LanguageContext);
  return <h1>{content.pricing}</h1>;
};

export default Pricing;
