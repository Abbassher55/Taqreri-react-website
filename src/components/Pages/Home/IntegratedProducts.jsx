import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import TitleSection from "./TitleSection";
import IntegratedProductsSlider from "../../Slider/IntegratedProductsSlider";
export default function IntegratedProducts() {
  const { content } = useContext(LanguageContext);
  return (
    <TitleSection title={content.integrated_products_title}>
      <IntegratedProductsSlider />
    </TitleSection>
  );
}
