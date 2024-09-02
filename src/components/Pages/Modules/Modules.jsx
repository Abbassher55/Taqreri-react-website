import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Modules = () => {
  const { content } = useContext(LanguageContext);

  return <h1>{content.modules}</h1>;
};

export default Modules;
