import React from "react";
import img1 from "../../assets/img/thumbnail-02.webp";
import { Link } from "react-router-dom";

export default function Topic({ title, img }) {
  return (
    <div className="topic">
      <div className="inner">
        <Link to="/" className="topic-link" style={{ textDecoration: "none" }}>
          <div className="img">
            <img src={img1} alt="Loading..." />
          </div>
          <h5>{title}</h5>
        </Link>
      </div>
    </div>
  );
}
