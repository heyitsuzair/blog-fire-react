import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function PostListView({ blog }) {
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

  // calculate minutes to read
  const minutes = 0.008 * blog.content.length;

  return (
    <Link to={`/blog/${blog.slug}`} className="td-none">
      <Grid
        container
        className="post-list-container"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        columnSpacing={{ md: 2, sm: 2 }}
        alignItems="center"
      >
        <Grid item lg={5} md={6} sm={6} xs={12}>
          <div className="img-parent">
            <img
              src={blog.image}
              alt="Loading..."
              className="img"
              ref={imgRef}
            />
          </div>
        </Grid>
        <Grid item lg={7} md={6} sm={6} xs={12}>
          <div className="post-list-card" ref={cardRef}>
            <div className="category">
              {blog.category.slice(0, 3).map((category, index) => {
                return <span key={index}>{category}</span>;
              })}
            </div>
            <div className="desc">
              <h3 className="card-h3 hover-line" ref={headRef}>
                {blog.title}
              </h3>
            </div>
            <div className="author">
              <div className="author-name">{blog.userInfo.name}</div>
              <div className="info">
                <span className="date">
                  {" "}
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
                <span className="read">{minutes.toFixed(1)} Min Read</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Link>
  );
}
