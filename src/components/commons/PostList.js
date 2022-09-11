import React from "react";
import PostListView from "./PostListView";
import { Grid, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

export default function PostList({ blogs }) {
  // get the current location and check whether it is home page or blog page and show the content accordingly
  const location = useLocation();

  return (
    <div className="post-list">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <Grid container columnSpacing={{ lg: 3, md: 0 }}>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            {location.pathname === "/"
              ? blogs
                  .slice(0, 6)
                  .sort(() => Math.random() - 0.5)
                  .map((blog, index) => {
                    return <PostListView key={index} blog={blog} />;
                  })
              : blogs.map((blog, index) => {
                  return <PostListView key={index} blog={blog} />;
                })}
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Sidebar
              blogs={blogs.slice(0, 4).sort(() => Math.random() - 0.5)}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
