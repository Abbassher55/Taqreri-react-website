import React from "react";
import Slider from "../../Slider/Slider";
import IntegratedSelling from "./IntegratedSelling";
import IntegratedProducts from "./IntegratedProducts";
import { whyTaqreri, integratedSelling } from "../../data.js";
import WhyTaqreri from "./WhyTaqreri.jsx";
import EffectiveMethods from "./EffectiveMethods.jsx";
import LogoSection from "./LogoSection.jsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define variants for the zoom-in animation
const zoomInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const [sliderRef, sliderInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      {/* Slider section with zoom-in animation */}
      <motion.div
        ref={sliderRef}
        initial="hidden"
        animate={sliderInView ? "visible" : "hidden"}
        variants={zoomInVariants}
      >
        <Slider />
      </motion.div>

      {/* WhyTaqreri section */}
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <WhyTaqreri threeCardsArray={whyTaqreri} />
      </motion.div>

      {/* IntegratedSelling section */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <IntegratedSelling threeCardsArray={integratedSelling} />
      </motion.div>

      {/* IntegratedProducts section */}
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <IntegratedProducts />
      </motion.div>

      {/* EffectiveMethods section */}
      <motion.div
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <EffectiveMethods />
      </motion.div>

      {/* LogoSection */}
      <motion.div
        ref={ref5}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <LogoSection />
      </motion.div>
    </>
  );
};

export default Home;
