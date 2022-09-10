import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ blog, category }) {
  // use the following ref to underline the paragraph when hovered on card
  const lineRef = useRef();
  // use the following ref to scale the image when hovered on card
  const imgRef = useRef();
  // use the following ref to make the card active when hovered on card
  const cardRef = useRef();

  // handle when someone leaves mouse from card
  const handleMouseEnter = () => {
    lineRef.current.style.backgroundSize = "100% 2px";
    imgRef.current.style.transform = "scale(1.1)";
    cardRef.current.classList.add("card-active");
  };
  // handle when someone enters mouse in card
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
            <span>{category}</span>
          </div>
          <div className="desc">
            <h3 className="card-h3">
              <Link
                to={`blog/${blog.slug}`}
                className="hover-line"
                ref={lineRef}
              >
                {blog.title}
              </Link>
            </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={12} sm={12}>
          <div className="card-img-parent">
            <Link to={`blog/${blog.slug}`}>
              <img
                src={blog.image}
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
