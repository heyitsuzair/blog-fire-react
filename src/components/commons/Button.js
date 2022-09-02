import React from "react";
import { Link } from "react-router-dom";
export default function ButtonComponent({ text, link }) {
  return (
    <Link className="btn-primary" to={link}>
      <span>{text}</span>
    </Link>
  );
}
