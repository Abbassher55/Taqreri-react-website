import { useState } from "react";
const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

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
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-2xl font-normal text-theme-blue">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabComponent;
