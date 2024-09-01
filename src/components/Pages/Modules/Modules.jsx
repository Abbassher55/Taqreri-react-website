import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Modules = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div className="md:w-2/3 w-full">
      <h1>{content.modules}</h1>
    </div>
  );
};

export default Modules;
