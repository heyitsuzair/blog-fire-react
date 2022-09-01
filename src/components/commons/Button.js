import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function ButtonComponent({ text, link }) {
  return (
    <Link className="btn-primary" to={link}>
      <Button>{text}</Button>
    </Link>
  );
}
