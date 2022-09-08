import React from "react";
import { Grid } from "@mui/material";
import TextFieldComponent from "../../commons/TextField";
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
      <Grid container marginTop={2} columnSpacing={2}>
        <Grid item lg={6}>
          <TextFieldComponent label="Title" />
        </Grid>
        <Grid item lg={6}>
          <TextFieldComponent label="Category" />
        </Grid>
      </Grid>
    </div>
  );
}
