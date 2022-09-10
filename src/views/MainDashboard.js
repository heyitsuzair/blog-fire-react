import React from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Stats from "../components/dashboard/Stats/Stats";

export default function MainDashboard() {
  return (
    <div className="main-dashboard">
      <BreadCrumb text="Main" />
      <div className="dashboard-table">
        <Stats />
      </div>
    </div>
  );
}
