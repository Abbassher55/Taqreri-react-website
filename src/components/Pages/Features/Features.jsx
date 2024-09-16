import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
import { FeaturesAccordionItems } from "../../data";
import AccordionItems from "../../Accordions/AccordionItems";
import Section from "../Section";
import TabComponent from "../../TabComponent";
import { tabs } from "../../data";

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
        <TabComponent tabs={tabs.features_tabs} />
      </Section>
      <Section>
        <AccordionItems accordionItems={FeaturesAccordionItems} tabs={tabs} />
      </Section>
    </>
  );
};

export default Features;
