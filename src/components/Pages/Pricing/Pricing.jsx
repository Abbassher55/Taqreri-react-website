import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import pricingHeader from "../../../assets/imgs/pricing-header-img.png";
import PagesHeader from "../PagesHeader";
const Pricing = () => {
  const { content } = useContext(LanguageContext);

  return (
    <PagesHeader
      title={content.pricing}
      description={content.pricing_desc}
      image={pricingHeader}
    />
  );
};

export default Pricing;
