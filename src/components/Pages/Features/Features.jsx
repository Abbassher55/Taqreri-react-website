import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
import { FeaturesAccordionItems } from "../../data";
import AccordionItems from "../../Accordions/AccordionItems";
import Section from "../Section";
import TabComponent from "../../TabComponent";
const Features = () => {
  const { content } = useContext(LanguageContext);

  return (
    <>
      <PagesHeader
        title={content.features}
        description={content.fetures_desc}
        image={contactHeader}
      />
      <Section>
        <TabComponent />
      </Section>
      <Section>
        <AccordionItems accordionItems={FeaturesAccordionItems} />
      </Section>
    </>
  );
};

export default Features;
