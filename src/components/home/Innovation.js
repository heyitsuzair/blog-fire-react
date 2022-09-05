import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Tabs from "../commons/Tabs";
import VerticalCard from "../commons/VerticalCard";
export default function Innovation() {
  //tabs name
  const tabs = ["Gadget", "Design", "Marketing", "Technology"];
  return (
    <div className="innovation">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <h1 className="section-heading">Innovation & Tech</h1>
        <Grid container gap={{ md: 2, sm: 2, xs: 1 }}>
          <Tabs tabs={tabs} />
        </Grid>
        <Grid container columnSpacing={{ md: 2, sm: 2, xs: 1 }}>
          <Grid item md={4} xs={12} sm={6}>
            <VerticalCard />
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <VerticalCard />
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <VerticalCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
