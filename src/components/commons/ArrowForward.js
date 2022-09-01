import React, { useContext } from "react";
import { ArrowForward } from "@mui/icons-material";
import blogContext from "../../context/blogContext";
export default function ArrowForawrdComponent() {
  // purpose:To Change Active Slider
  const blog_context = useContext(blogContext);
  const { setActive } = blog_context;
  // handle click
  const handleClick = (e) => {
    e.preventDefault();
    setActive(1);
  };
  return <ArrowForward onClick={(e) => handleClick(e)} />;
}
