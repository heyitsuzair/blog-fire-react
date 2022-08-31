import React from "react";
import { Grid } from "@mui/material";
import logo from "../../assets/img/logo-black.webp";
export default function Header() {
  return (
    <div className="header">
      <Grid container>
        <Grid item md={5}>
          <img src={logo} alt="Loading..." className="brand" />
        </Grid>
        <Grid item md={2}>
          hello
        </Grid>
        <Grid item md={5} textAlign="right">
          hello
        </Grid>
      </Grid>
    </div>
  );
}
