import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
export default function BlogForm() {
  return (
    <div className="blog-form">
      <Grid container>
        <Grid item lg={12}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}
