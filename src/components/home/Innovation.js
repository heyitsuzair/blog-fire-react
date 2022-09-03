import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
export default function Innovation() {
  return (
    <div className="featured-posts">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Innovation & Tech</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs />
        </Grid>
      </Container>
    </div>
  );
}
