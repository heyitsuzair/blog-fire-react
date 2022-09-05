import React from "react";
import img from "../../assets/img/thumbnail-01.webp";
import { Link } from "react-router-dom";

export default function HorizontalTab({
  index,
  activeTab,
  setActiveTab,
  desc,
}) {
  // handle when mouse enters the card
  const handleMouseEnter = () => {
    setActiveTab(index);
  };

  return (
    <div
      className="horizontal-tab"
      onMouseEnter={() => handleMouseEnter()}
      //   onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className="left hover-line-primary"
        style={{ backgroundSize: index === activeTab ? "100% 2px" : "" }}
      >
        <div className="number">{index}</div>
        <div className="cat-info">
          <div className="category">
            <span>SEO</span>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="desc card-h3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptatum sequi!
            </h3>
          </Link>
          <div className="author-info">
            <div className="author-name">UZAIR</div>
            <div className="info">
              <span className="date">Jun 21 2022</span>
              <span className="dot"></span>
              <span className="read">
                {0.008 * desc.split("").length} Min Read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src={img}
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
