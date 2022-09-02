import React, { useRef } from "react";
import { Grid } from "@mui/material";
import img from "../../assets/img/author.webp";
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
        className="card"
        display="flex"
        flexDirection={{ md: "row", xs: "column", sm: "row" }}
        gap={{ xs: 5, md: 0, sm: 0 }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sm={6}
          display="flex"
          flexDirection="column"
          gap={{ md: 3, xs: 3, sm: 3 }}
        >
          <div className="category">
            <span>Design</span>
          </div>
          <div className="desc">
            <h2>
              <Link to="/" className="hover-line" ref={lineRef}>
                Description will be here
              </Link>
            </h2>
          </div>
          <div className="author">
            <img src={img} alt="Author" />
            <div className="author-info">
              <span className="name">John Doe</span>
              <div className="info">
                <span className="date">Feb 10 2022 </span>
                <span className="dot"></span>
                <span className="views">300K Views</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div className="card-img-parent">
            <Link to="/">
              <img
                src={img2}
                width={200}
                height={200}
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
