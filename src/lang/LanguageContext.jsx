import React, { createContext, useState, useEffect } from "react";
import en from "./en_lang";
import ar from "./ar_lang";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(en);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    setContent(savedLanguage === "ar" ? ar : en);
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setContent(lang === "ar" ? ar : en);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return <LanguageContext.Provider value={{ language, content, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
