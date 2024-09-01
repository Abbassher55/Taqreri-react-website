import React from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";

const LanguageWrapper = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export const withLanguageContent = (Component) => {
  return (props) => {
    const { content } = useLanguage();
    return <Component {...props} content={content} />;
  };
};

export default LanguageWrapper;
