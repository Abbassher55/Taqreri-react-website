import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
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
const Contact = () => {
  const { content } = useContext(LanguageContext);
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  return (
    <motion.div
      ref={ref1}
      initial="hidden"
      animate={inView1 ? "visible" : "hidden"}
      variants={zoomInVariants}
    >
      <PagesHeader
        title={content.contact}
        description={content.contact_desc}
        image={contactHeader}
      />
    </motion.div>
  );
};

export default Contact;
