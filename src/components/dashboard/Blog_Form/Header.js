import React from "react";
import { Grid } from "@mui/material";
export default function header() {
  // get logged in user info
  const getUser = JSON.parse(localStorage.getItem("blog-user"));
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  return (
    <div className="form-header">
      <Grid container gap={2} alignItems="center">
        <Grid item>
          <img src={getUser.pic} alt="Profile" />
        </Grid>
        <Grid item>
          <h4>{getUser.name}</h4>
          <span>
            {d.getDate() +
              " " +
              monthNames[d.getMonth()] +
              " " +
              d.getFullYear()}
          </span>
        </Grid>
      </Grid>
    </div>
  );
}
