import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Contact = () => {
  const { content } = useContext(LanguageContext);

  return <h1>{content.contact}</h1>;
};

export default Contact;
