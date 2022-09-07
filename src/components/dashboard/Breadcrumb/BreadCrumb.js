import React from "react";
import { ArrowForward } from "@mui/icons-material";

export default function BreadCrumb({ text }) {
  return (
    <div className="breadcrumb">
      <span>Dashboard</span> <ArrowForward />
      <span className="active">{text}</span>
    </div>
  );
}
