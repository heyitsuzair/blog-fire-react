import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import TextFieldComponent from "../../commons/TextField";
import MultipleSelect from "../../commons/MultipleSelect";
export default function BlogForm() {
  return (
    <div className="blog-form">
      <Grid container>
        <Grid item lg={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container marginTop={2} columnSpacing={2} alignItems="center">
        <Grid item lg={6} sm={6} xs={6} md={6}>
          <TextFieldComponent label="Title" />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6}>
          <MultipleSelect label="Category" />
        </Grid>
      </Grid>
    </div>
  );
}
