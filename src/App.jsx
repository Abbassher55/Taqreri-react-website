import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/MainNavbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Features from "./components/Pages/Features/Features";
import Modules from "./components/Pages/Modules/Modules";
import { LanguageProvider } from "./lang/LanguageContext";
import TopBar from "./components/TopBar";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Pricing from "./components/Pages/Pricing/Pricing";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer";
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

const App = () => {
  const [topBarRef, topBarInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [openNavbar, setNavbar] = useState(false);
  function toggleNavbar() {
    setNavbar(!openNavbar);
  }
  return (
    <LanguageProvider>
      <Router>
        <div className="container flex flex-col gap-3 p-0 pb-0 md:px-2 md:pt-2 lg:flex-row lg:px-3 lg:pt-3">
          <div className="block lg:hidden">
            <TopBar togglerFunction={toggleNavbar} />
          </div>
          <Navbar navbarToggler={openNavbar} setNavbar={setNavbar} />
          <div className="lg:w-10/12">
            <motion.div
              ref={topBarRef}
              initial="hidden"
              animate={topBarInView ? "visible" : "hidden"}
              variants={zoomInVariants}
              className="hidden lg:block"
            >
              <TopBar />
            </motion.div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
