import React from "react";
import { Grid } from "@mui/material";

export default function BlogPost({ blog }) {
  console.log(blog);

  return (
    <div className="blog-post">
      <div className="author">
        <Grid
          display="flex"
          justifyContent="space-between"
          className="author-inner"
          container
        >
          <Grid item>
            <div className="by">
              <strong>Writer : </strong>
              <span>{blog.userInfo.name}</span>
            </div>
          </Grid>
          <Grid item>
            <div className="last-updated">
              <strong>Last Updated : </strong>
              <span>
                {new Date(blog.date.seconds * 1000).getDate().toLocaleString() +
                  "/" +
                  parseInt(new Date(blog.date.seconds * 1000).getMonth() + 1) +
                  "/" +
                  new Date(blog.date.seconds * 1000).getFullYear()}
              </span>
            </div>
          </Grid>
          <Grid item>
            <div className="status">
              <strong>Status : </strong>
              <span>{blog.status}</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="content">
        <img src={blog.image} alt="Loading..." className="img" />
      </div>
    </div>
  );
}
