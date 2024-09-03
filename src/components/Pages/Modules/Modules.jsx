import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import modulesHeader from "../../../assets/imgs/modules-img.png";
import PagesHeader from "../PagesHeader";
const Modules = () => {
  const { content } = useContext(LanguageContext);

  return (
    <PagesHeader
      title={content.modules}
      description={content.modules_desc}
      image={modulesHeader}
    />
  );
};

export default Modules;
