import React, { useContext } from "react";
import { ArrowBack } from "@mui/icons-material";
import blogContext from "../../context/blogContext";

export default function ArrowBackComponent() {
  // purpose:To Change Active Slider
  const blog_context = useContext(blogContext);
  const { setActive } = blog_context;
  // handle click
  const handleClick = () => {
    setActive(0);
  };

  return <ArrowBack onClick={() => handleClick()} />;
}
