import { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "invoices", content: "Content for Tab invoices" },
    {
      label: "Purchases",
      content: "Purchasing Management - Supplier Management",
    },
    { label: "Tab 3", content: "Content for Tab 3" },
    { label: "Tab 4", content: "Content for Tab 4" },
    { label: "Tab 5", content: "Content for Tab 5" },
  ];

  return (
    <div className="mx-auto">
      <div className="mb-4 flex flex-wrap justify-between rounded-3xl bg-white md:flex-nowrap md:space-x-2 md:rounded-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-1/2 px-4 py-2 text-2xl font-bold capitalize text-theme-blue md:w-full ${
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
