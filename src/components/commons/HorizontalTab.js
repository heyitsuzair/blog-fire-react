import React from "react";
import { Link } from "react-router-dom";

export default function HorizontalTab({
  blog,
  activeTab,
  setActiveTab,
  index,
  category,
}) {
  // handle when mouse enters the card
  const handleMouseEnter = () => {
    setActiveTab(index);
  };

  // calculate minutes to read
  const minutes = 0.008 * blog.content.length;

  return (
    <div className="horizontal-tab" onMouseEnter={() => handleMouseEnter()}>
      <div
        className="left hover-line-primary"
        style={{ backgroundSize: index === activeTab ? "100% 2px" : "" }}
      >
        <div className="number">{index + 1}</div>
        <div className="cat-info">
          <div className="category">
            <span>{category}</span>
          </div>
          <Link to={`blog/${blog.slug}`} style={{ textDecoration: "none" }}>
            <h3 className="desc card-h3">{blog.title}</h3>
          </Link>
          <div className="author-info">
            <div className="author-name">{blog.userInfo.name}</div>
            <div className="info">
              <span className="date">
                {new Date(blog.date.seconds * 1000).getDate().toLocaleString() +
                  "/" +
                  parseInt(new Date(blog.date.seconds * 1000).getMonth() + 1) +
                  "/" +
                  new Date(blog.date.seconds * 1000).getFullYear()}
              </span>
              <span className="dot"></span>
              <span className="read">{minutes.toFixed(1)} Min Read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src={blog.image}
          alt="Loading..."
          className={`img ${
            index === activeTab
              ? "active"
              : window.innerWidth <= 1024
              ? "active"
              : ""
          }`}
        />
      </div>
    </div>
  );
}
