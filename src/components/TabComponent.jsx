import React, { useState, useContext } from "react";
import { LanguageContext } from "../lang/LanguageContext";

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { language } = useContext(LanguageContext);

  return (
    <div className="mx-auto">
      <div className="mb-4 flex flex-wrap justify-between rounded-3xl bg-white md:flex-nowrap md:rounded-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full px-4 py-2 text-2xl font-bold capitalize text-theme-blue ${
              activeTab === index
                ? "rounded-full bg-theme-yellow"
                : "text-gray-700"
            } `}
          >
            {language === "en" ? tab.labelEn : tab.labelAr}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-3 p-5 md:flex-row">
        <div className="md:w-1/2">
          <div className="text-2xl font-medium text-theme-blue md:w-3/4">
            {language === "en"
              ? tabs[activeTab].contentEn
              : tabs[activeTab].contentAr}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-2xl font-normal text-theme-blue">
            <img
              src={tabs[activeTab].img}
              className="h-52 rounded-bl-xl rounded-br-[4rem] rounded-tl-[4rem] rounded-tr-xl"
              alt="Tab image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
