import React, { useState } from "react";
import blogContext from "./blogContext";
import image from "../assets/img/thumbnail-01.webp";
import image2 from "../assets/img/thumbnail-02.webp";
export default function BlogState({ children }) {
  const [blogs, setBlogs] = useState([
    {
      category: "Designs",
      title: "Hello",
      img: image,
      desc: "I am Uzair A Senior Developer having experience in web development industry for 3 years",
      by: "UZAIR",
    },
    {
      category: "Sports",
      title: "Sports",
      img: image2,
      desc: "I am Sports",
      by: "Sports",
    },
  ]);
  const [active, setActive] = useState(0);
  return (
    <blogContext.Provider value={{ blogs, active, setActive }}>
      {children}
    </blogContext.Provider>
  );
}
