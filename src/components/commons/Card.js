import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ blog }) {
  // use the following ref to underline the paragraph when hovered on card
  const lineRef = useRef();
  // use the following ref to scale the image when hovered on card
  const imgRef = useRef();
  // use the following ref to make the card active when hovered on card
  const cardRef = useRef();

  // handle when someones enter the mouse in card
  const handleMouseEnter = () => {
    lineRef.current.style.backgroundSize = "100% 2px";
    imgRef.current.style.transform = "scale(1.1)";
    cardRef.current.classList.add("card-active");
  };
  // handle when someones leave the mouse from card
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
            <span>{blog.category[0]}</span>
          </div>
          <div className="desc">
            <h2>
              <Link
                to={`blog/${blog.slug}`}
                className="hover-line"
                ref={lineRef}
              >
                {blog.title}
              </Link>
            </h2>
          </div>
          <div className="author">
            <img
              src={blog.userInfo.pic}
              style={{ borderRadius: "50%", width: "3rem" }}
              alt="Author"
            />
            <div className="author-info">
              <span className="author-name">{blog.userInfo.name}</span>
              <div className="info">
                <span className="date">
                  {new Date(blog.date.seconds * 1000)
                    .getDate()
                    .toLocaleString() +
                    "/" +
                    parseInt(
                      new Date(blog.date.seconds * 1000).getMonth() + 1
                    ) +
                    "/" +
                    new Date(blog.date.seconds * 1000).getFullYear()}
                </span>
                <span className="dot"></span>
                <span className="views">{blog.views} Views</span>
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
