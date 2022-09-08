import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import Header from "./Header";
import TextFieldComponent from "../../commons/TextField";
import MultipleSelect from "../../commons/MultipleSelect";
import TextEditor from "./TextEditor";
import FeaturedImg from "./FeaturedImg";
import blogFormContext from "../../../context/blogFormContext";
import { Add, Update } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
export default function BlogForm() {
  // use the following location to check whether it is add blog or update blog page
  const location = useLocation();

  // form values context
  const form_context = useContext(blogFormContext);
  const { setFormValues, formValues } = form_context;

  // multiple select values
  const categories = ["Design", "Technology", "SEO"];
  const status = ["Published", "Pending", "Draft"];

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="blog-form">
      <Grid container>
        <Grid item lg={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container marginTop={2} columnSpacing={2} alignItems="center">
        <Grid item lg={6} sm={6} xs={6} md={6}>
          <TextFieldComponent
            onChange={handleOnChange}
            value={formValues.title}
            label="Title"
          />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6}>
          <MultipleSelect
            onChange={handleOnChange}
            value={formValues.category}
            label="Category"
            multiSelect={true}
            values={categories}
          />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6} marginTop={2}>
          <TextFieldComponent
            onChange={handleOnChange}
            value={formValues.slug}
            label="Slug"
          />
        </Grid>
        <Grid item lg={6} sm={6} xs={6} md={6} marginTop={2}>
          <MultipleSelect
            onChange={handleOnChange}
            value={formValues.status}
            label="Status"
            multiSelect={false}
            values={status}
          />
        </Grid>
        <Grid item lg={12} sm={12} xs={12} md={12} marginTop={2}>
          <TextEditor
            label="content"
            onChange={handleOnChange}
            value={formValues.content}
          />
        </Grid>
        <Grid item lg={11.8} sm={12} xs={12} md={12} marginTop={2}>
          <FeaturedImg onChange={handleOnChange} value={formValues.image} />
        </Grid>
        <Grid item lg={12} sm={12} xs={12} md={12} marginTop={2}>
          {location.pathname === "/dashboard/addBlog" ? (
            <Button
              variant="contained"
              className="blog-form-submit"
              endIcon={<Add />}
            >
              Add
            </Button>
          ) : (
            <Button
              variant="contained"
              className="blog-form-submit"
              endIcon={<Update />}
            >
              Update
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
