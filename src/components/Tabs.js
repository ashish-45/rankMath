import React, { useState } from "react";

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("Day");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="tab-card">
        <div className="tab-section">
          <div>
            <p className={selectedTab === "Day" ? "selected week-area" : ""} onClick={() => handleTabClick("Day")}>Day</p>
          </div>
          <div>
            <p className={selectedTab === "Week" ? "selected week-area" : ""} onClick={() => handleTabClick("Week")}>Week</p>
          </div>
          <div>
            <p className={selectedTab === "Month" ? "selected week-area" : ""} onClick={() => handleTabClick("Month")}>Month</p>
          </div>
          <div>
            <p className={selectedTab === "Year" ? "selected week-area" : ""} onClick={() => handleTabClick("Year")}>Year</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
