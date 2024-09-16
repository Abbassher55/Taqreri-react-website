import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import modulesHeader from "../../../assets/imgs/modules-img.png";
import PagesHeader from "../PagesHeader";
import { ModulesAccordionItems } from "../../data";
import AccordionItems from "../../Accordions/AccordionItems";
import Section from "../Section";
import { tabs } from "../../data";

const Modules = () => {
  const { content } = useContext(LanguageContext);

  return (
    <>
      <PagesHeader
        title={content.modules}
        description={content.modules_desc}
        image={modulesHeader}
      />
      <Section>
        <AccordionItems
          accordionItems={ModulesAccordionItems}
          tabs={tabs["modules_tabs"]}
        />
      </Section>
    </>
  );
};

export default Modules;
