import React, { useState } from "react";
import AccordionSingleItem from "./AccordionSingleItem";
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ms-auto w-4/5 md:mx-auto md:w-3/5">
      {items.map((item, index) => (
        <AccordionSingleItem
          key={index}
          titleEn={item.titleEn}
          titleAr={item.titleAr}
          descEn={item.descEn}
          descAr={item.descAr}
          accordionImg={item.accordionImg}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Accordion;
