import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import TextFieldComponent from "../../commons/TextField";
import MultipleSelect from "../../commons/MultipleSelect";
import TextEditor from "./TextEditor";
export default function BlogForm() {
  const categories = ["Design", "Technology", "SEO"];
  const status = ["Published", "Pending", "Draft"];

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
          <MultipleSelect
            label="Category"
            multiSelect={true}
            values={categories}
          />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6} marginTop={2}>
          <TextFieldComponent label="Slug" />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6} marginTop={2}>
          <MultipleSelect label="Status" multiSelect={false} values={status} />
        </Grid>
        <Grid item lg={12} sm={12} xs={12} md={12} marginTop={2}>
          <TextEditor />
        </Grid>
      </Grid>
    </div>
  );
}
