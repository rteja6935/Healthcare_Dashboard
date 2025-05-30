import React from "react";

import DashboardOverview from "./DashboardOverview";
// import ActivitySection from "./ActivitySection";
import "../styles/DashboardMainContent.css"; // Optional CSS import

function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
    <DashboardOverview />
    </div>
  );
}

export default DashboardMainContent;
