import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  const [openNavbar, setNavbar] = useState(true);
  function toggleNavbar() {
    setNavbar(!openNavbar);
  }
  return (
    <LanguageProvider>
      <Router basename="/Taqreri-react-website">
        <div className="container flex flex-col gap-3 p-3 lg:flex-row">
          <div className="block lg:hidden">
            <TopBar togglerFunction={toggleNavbar} />
          </div>
          <Navbar navbarToggler={openNavbar} />
          <div className="md:w-8/12 lg:w-10/12">
            <div className="hidden lg:block">
              <TopBar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/modules" element={<Modules />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
