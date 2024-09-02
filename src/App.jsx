import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MainNavbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Features from "./components/Pages/Features/Features";
import Modules from "./components/Pages/Modules/Modules";
import { LanguageProvider } from "./lang/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="container flex flex-col gap-3 p-3 md:flex-row">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/modules" element={<Modules />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
