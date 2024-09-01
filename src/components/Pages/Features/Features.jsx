import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Featues = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div className="md:w-2/3 w-full">
      <h1>{content.introText}</h1>
      <p>asdas</p>
    </div>
  );
};

export default Featues;
