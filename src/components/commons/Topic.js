import React, { useRef } from "react";
import img1 from "../../assets/img/thumbnail-02.webp";
import { Link } from "react-router-dom";

export default function Topic({ title, img }) {
  // use the following reference to make the image scale when mouse enters h5
  const ref = useRef();

  const handleMouseEnter = () => {
    ref.current.style.transform = "scale(1.1)";
  };
  const handleMouseLeave = () => {
    ref.current.style.transform = "";
  };

  return (
    <div className="topic">
      <div className="inner">
        <Link
          to="/"
          className="topic-link"
          style={{ textDecoration: "none" }}
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <div className="img">
            <img src={img1} alt="Loading..." ref={ref} />
          </div>
          <h5>{title}</h5>
        </Link>
      </div>
    </div>
  );
}
