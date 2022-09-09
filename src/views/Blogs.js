import React from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Table from "../components/dashboard/Table/Table";

export default function Blogs() {
  return (
    <div className="blogs">
      <BreadCrumb text="Blogs" />
      <div className="dashboard-table">
        <Table />
      </div>
    </div>
  );
}
