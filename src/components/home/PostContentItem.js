import React from "react";
import { useContext } from "react";
import img from "../../assets/img/author.webp";
import blogContext from "../../context/blogContext";
import Button from "../commons/Button";
export default function PostContentItem() {
  // purpose:fetch data
  const blog_context = useContext(blogContext);
  const { blogs, active } = blog_context;
  return (
    <>
      {blogs.map((blog, index) => {
        return active === index ? (
          <div
            key={index}
            className="post-item animate__animated animate__fadeIn"
          >
            <div className="category">
              <span>{blog.category}</span>
            </div>
            <div className="content">
              <h2>
                <a href="/" className="article hover-line">
                  {blog.desc}
                </a>
              </h2>
              <div className="author-info">
                <div className="author-info-inner">
                  <div className="info-author">
                    <div className="img">
                      <img src={img} alt="Author" />
                    </div>
                    <div className="info-parent">
                      <div className="name">{blog.by}</div>
                      <div className="info">
                        <span className="date">Feb 30 2022 </span>
                        <span className="dot"></span>
                        <span>200K Views</span>
                      </div>
                    </div>
                  </div>
                  <div className="read-more">
                    <Button text="Read More" link="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
}
