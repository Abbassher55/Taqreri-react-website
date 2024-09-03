import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";
import contactHeader from "../../../assets/imgs/contact-header.png";
import PagesHeader from "../PagesHeader";
const Contact = () => {
  const { content } = useContext(LanguageContext);

  return (
    <PagesHeader
      title={content.contact}
      description={content.contact_desc}
      image={contactHeader}
    />
  );
};

export default Contact;
