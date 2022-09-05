import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
export default function Innovation() {
  // tabs name
  const tabs = ["Gadget", "Travel", "SEO", "Research"];
  return (
    <div className="most-popular">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Most Popular</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs tabs={tabs} />
        </Grid>
      </Container>
    </div>
  );
}
