import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
import { FeaturesAccordionItems } from "../../data";
import AccordionItems from "../../Accordions/AccordionItems";
import Section from "../Section";
import TabComponent from "../../TabComponent";
import { tabs } from "../../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const zoomInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};
const Features = () => {
  const { content } = useContext(LanguageContext);
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <PagesHeader
          title={content.features}
          description={content.fetures_desc}
          image={contactHeader}
        />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <Section>
          <TabComponent tabs={tabs.features_tabs} />
        </Section>
      </motion.div>
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <Section>
          <AccordionItems accordionItems={FeaturesAccordionItems} tabs={tabs} />
        </Section>
      </motion.div>
    </>
  );
};

export default Features;
