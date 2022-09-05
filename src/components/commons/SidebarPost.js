import React, { useRef } from "react";
import { Grid } from "@mui/material";
import img from "../../assets/img/thumbnail-01.webp";
import { Link } from "react-router-dom";
export default function SidebarPost() {
  // use the following reference to make the heading underline when someone brings mouse in card
  const headRef = useRef();

  // use the following reference to make the image active when someone brings mouse in card
  const imgRef = useRef();

  // handle when mouse is entered
  const handleMouseEnter = () => {
    imgRef.current.classList.add("active");
    headRef.current.style.backgroundSize = "100% 2px";
  };
  // handle when mouse is left
  const handleMouseLeave = () => {
    imgRef.current.classList.remove("active");
    headRef.current.style.backgroundSize = "0 2px";
  };
  return (
    <Link to="/" className="td-none">
      <Grid
        container
        className="sidebar-post"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Grid item lg={4} xs={5} sm={3} md={2} className="sidebar-post-item">
          <div className="img-parent">
            <img src={img} alt="Loading..." className="img" ref={imgRef} />
          </div>
        </Grid>
        <Grid
          item
          lg={8}
          xs={7}
          sm={9}
          md={10}
          className="sidebar-post-item"
          display="flex"
          flexDirection="column"
          gap={{ lg: 4, xs: 2, sm: 7 }}
        >
          <div className="desc">
            <h5 className="card-h3 hover-line" ref={headRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>
          </div>
          <div className="info">
            <span className="date">Jun 30 2022</span>
            <span className="dot"></span>
            <span className="read">3 Min Read</span>
          </div>
        </Grid>
      </Grid>
    </Link>
  );
}
