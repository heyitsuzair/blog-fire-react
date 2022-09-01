import React from "react";
import { Grid } from "@mui/material";
import logo from "../../assets/img/logo-black.webp";
import MenuItem from "./MenuItem";
import HeaderRight from "./HeaderRight";
export default function Header() {
  return (
    <div className="header">
      <Grid container>
        <Grid item md={2} xs={4} sm={10}>
          <img src={logo} alt="Loading..." className="brand" />
        </Grid>
        <Grid
          item
          md={6}
          sm={8}
          display={window.innerWidth < 768 ? "none" : "flex"}
          justifyContent="space-evenly"
          alignItems="center"
          className="hidden"
        >
          <MenuItem title="Home" to="/" />
          <MenuItem title="Blog" to="/" />
          <MenuItem title="Sign Up" to="/" />
          <MenuItem title="Login" to="/" />
        </Grid>
        <Grid
          item
          md={4}
          xs={8}
          sm={2}
          textAlign="right"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={{ md: 1 }}
        >
          <HeaderRight />
        </Grid>
      </Grid>
    </div>
  );
}
