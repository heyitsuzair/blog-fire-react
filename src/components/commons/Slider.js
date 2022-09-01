import React, { useContext } from "react";
import BlogContext from "../../context/blogContext";
export default function Slider() {
  // purpose:To Show Slider Images
  const blog_context = useContext(BlogContext);

  const { blogs, active } = blog_context;
  return (
    <div>
      {blogs.map((blog, index) => {
        return active === index ? (
          <div key={index} className="animate__animated animate__fadeIn">
            <img src={blog.img} alt="Banner" />
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}
