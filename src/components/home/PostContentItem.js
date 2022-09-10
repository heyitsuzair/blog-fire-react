import React from "react";
import { useContext } from "react";
import blogContext from "../../context/blogContext";
import Button from "../commons/Button";
import { Link } from "react-router-dom";
export default function PostContentItem({ blogs }) {
  // purpose:fetch data
  const blog_context = useContext(blogContext);
  const { active } = blog_context;

  return (
    <>
      {blogs.map((blog, index) => {
        return active === index ? (
          <div
            key={index}
            className="post-item animate__animated animate__fadeIn"
          >
            <div className="category">
              <span>{blog.category[0]}</span>
            </div>
            <div className="content">
              <h2>
                <Link to={`blog/${blog.slug}`} className="article hover-line">
                  {blog.title.substr(0, 20)}
                </Link>
              </h2>
              <div className="author-info">
                <div className="author-info-inner">
                  <div className="info-author">
                    <div className="img">
                      <img
                        src={blog.userInfo.pic}
                        style={{ borderRadius: "50%" }}
                        alt="Author"
                      />
                    </div>
                    <div className="info-parent">
                      <div className="author-name">{blog.userInfo.name}</div>
                      <div className="info">
                        <span className="date">
                          {new Date(blog.date.seconds * 1000)
                            .getDate()
                            .toLocaleString() +
                            "/" +
                            new Date(blog.date.seconds * 1000).getMonth() +
                            "/" +
                            new Date(blog.date.seconds * 1000).getFullYear()}
                        </span>
                        <span className="dot"></span>
                        <span>{blog.views} Views</span>
                      </div>
                    </div>
                  </div>
                  <div className="read-more">
                    <Button text="Read More" link={`blog/${blog.slug}`} />
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
