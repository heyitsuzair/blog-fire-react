import React, { useRef } from "react";
import { Grid } from "@mui/material";
import img from "../../assets/img/thumbnail-01.webp";
import { Link } from "react-router-dom";

export default function PostListView() {
  // use the following reference to make the image active when someone brings mouse in card
  const imgRef = useRef();

  // use the following reference to make the card active when someone brings mouse in card
  const cardRef = useRef();

  // use the following reference to make the heading underline when someone brings mouse in card
  const headRef = useRef();

  // handle when mouse is entered
  const handleMouseEnter = () => {
    imgRef.current.classList.add("active");
    cardRef.current.classList.add("active");
    headRef.current.style.backgroundSize = "100% 2px";
  };
  // handle when mouse is left
  const handleMouseLeave = () => {
    imgRef.current.classList.remove("active");
    cardRef.current.classList.remove("active");
    headRef.current.style.backgroundSize = "0 2px";
  };
  return (
    <Link to="/" className="td-none">
      <Grid
        container
        className="post-list-container"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        columnSpacing={{ md: 2, sm: 2 }}
      >
        <Grid item lg={5} md={6} sm={4} xs={12}>
          <div className="img-parent">
            <img src={img} alt="Loading..." className="img" ref={imgRef} />
          </div>
        </Grid>
        <Grid item lg={7} md={6} sm={8} xs={12}>
          <div className="post-list-card" ref={cardRef}>
            <div className="category">
              <span>Design</span>
            </div>
            <div className="desc">
              <h3 className="card-h3 hover-line" ref={headRef}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                consectetur quo sint inventore est quas?
              </h3>
            </div>
            <div className="author">
              <div className="author-name">UZAIR</div>
              <div className="info">
                <span className="date">Jun 30 2022</span>
                <span className="dot"></span>
                <span className="read">3 Min Read</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Link>
  );
}
