import React from "react";
import ArrowBackComponent from "./ArrowBack";
import ArrowForawrdComponent from "./ArrowForward";

export default function Arrows({ onClick }) {
  return (
    <div className="arrow-icons">
      <ArrowBackComponent onClick={onClick} />
      <ArrowForawrdComponent onClick={onClick} />
    </div>
  );
}
