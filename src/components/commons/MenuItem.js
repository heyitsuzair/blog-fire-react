import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ title, to }) {
  return (
    <Link className="menu-item" to={to}>
      {title}
    </Link>
  );
}
