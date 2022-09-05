import React, { useRef } from "react";
import img from "../../assets/img/thumbnail-01.webp";
import { Link } from "react-router-dom";

export default function HorizontalTab({ index, activeTab, setActiveTab }) {
  // use the following reference to make the image active and display it with scale
  const ref = useRef();
  // handle when mouse enters the card
  const handleMouseEnter = () => {
    setActiveTab(index);
    ref.current.classList.add("active");
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
        <div className="info">
          <div className="category">SEO</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem voluptatum sequi!
            </h3>
          </Link>
          <div className="author-info">
            <div className="name">UZAIR</div>
            <div className="info">
              <div className="date">Jun 21 2022</div>
              <div className="dot"></div>
              <div className="read">3 Min Read</div>
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
          ref={ref}
        />
      </div>
    </div>
  );
}
