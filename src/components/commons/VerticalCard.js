import React, { useRef } from "react";
import { Grid } from "@mui/material";
import img2 from "../../assets/img/thumbnail-01.webp";
import { Link } from "react-router-dom";

export default function Card() {
  // use the following ref to underline the paragraph when hovered on card
  const lineRef = useRef();
  // use the following ref to scale the image when hovered on card
  const imgRef = useRef();
  // use the following ref to make the card active when hovered on card
  const cardRef = useRef();

  const handleMouseEnter = () => {
    lineRef.current.style.backgroundSize = "100% 2px";
    imgRef.current.style.transform = "scale(1.1)";
    cardRef.current.classList.add("card-active");
  };
  const handleMouseLeave = () => {
    lineRef.current.style.backgroundSize = "0 2px";
    imgRef.current.style.transform = "none";
    cardRef.current.classList.remove("card-active");
  };
  return (
    <div
      className="card-parent"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      ref={cardRef}
    >
      <Grid
        container
        className="vertical-card"
        display="flex"
        flexDirection="column"
        gap={{ xs: 4, md: 4, sm: 4 }}
      >
        <Grid
          item
          xs={8}
          md={8}
          sm={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={{ md: 3, xs: 3, sm: 3 }}
        >
          <div className="category">
            <span>Design</span>
          </div>
          <div className="desc">
            <h3 className="card-h3">
              <Link to="/" className="hover-line" ref={lineRef}>
                Lorem ipsum dolor sit, amet ...
              </Link>
            </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <div className="card-img-parent">
            <Link to="/">
              <img
                src={img2}
                alt="Loading..."
                className="card-img"
                ref={imgRef}
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
