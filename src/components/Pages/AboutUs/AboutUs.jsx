import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import aboutUsHeader from "../../../assets/imgs/about-us-header.png";
import PagesHeader from "../PagesHeader";
import AccordionItems from "../../Accordions/AccordionItems";
import { AboutUsAccordionItems } from "../../data";
import { tabs } from "../../data";
import Section from "../Section";
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
const AboutUs = () => {
  const { content } = useContext(LanguageContext);
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <PagesHeader
          title={content.about_us}
          description={content.about_us_desc}
          image={aboutUsHeader}
        />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <Section>
          <AccordionItems accordionItems={AboutUsAccordionItems} tabs={tabs} />
        </Section>
      </motion.div>
    </>
  );
};

export default AboutUs;
