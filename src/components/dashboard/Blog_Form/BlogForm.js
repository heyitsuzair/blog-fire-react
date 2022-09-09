import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Header from "./Header";
import TextFieldComponent from "../../commons/TextField";
import MultipleSelect from "../../commons/MultipleSelect";
import TextEditor from "./TextEditor";
import FeaturedImg from "./FeaturedImg";
import blogFormContext from "../../../context/blogFormContext";
import { Add, Update } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase-config";

export default function BlogForm({ setProgress }) {
  // use the following location to check whether it is add blog or update blog page
  const location = useLocation();

  // form values context
  const form_context = useContext(blogFormContext);
  const { setFormValues, formValues } = form_context;

  // multiple select values
  const categories = ["Design", "Technology", "SEO"];
  const status = ["Published", "Pending", "Draft"];

  // loading button state
  const [loading, setLoading] = React.useState(false);

  // on change form values
  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // handle when clicked on add button
  const handleAddClick = async () => {
    if (formValues.title === null) {
      toast.error("Please Enter The Title!");
      return;
    } else if (formValues.category.length < 1) {
      toast.error("Please Select The Category!");
      return;
    } else if (formValues.slug === null) {
      toast.error("Please Enter The Slug!");
      return;
    } else if (formValues.status === null) {
      toast.error("Please Select The Status!");
      return;
    } else if (
      formValues.content === null ||
      formValues.content === "<p><br></p>"
    ) {
      toast.error("Content Cannot Be Empty!");
      return;
    } else if (formValues.image === null) {
      toast.error("Please Upload Featured Image!");
      return;
    }
    setLoading(true);
    // logged in user info
    const user = JSON.parse(localStorage.getItem("blog-user"));

    const formData = new FormData();
    setProgress(30);

    formData.append("file", formValues.image);
    formData.append("upload_preset", "xgkxvbud");

    // uploading image to cloudinary
    await axios
      .post("https://api.cloudinary.com/v1_1/digaxe3sc/image/upload", formData)
      .then(async (res) => {
        setProgress(70);
        // Add a new document to forebase.
        await addDoc(collection(db, "blogs"), {
          category: formValues.category,
          content: formValues.content,
          email: user.email,
          image: res.data.secure_url,
          slug: formValues.slug,
          status: formValues.status,
          title: formValues.title,
          views: parseInt(0),
        });
        // changing progress to 100%
        setProgress(100);
        toast.success("Blog Added!");
        setLoading(false);
        //setting form value back to initial
        setFormValues({
          title: "",
          slug: "",
          category: [],
          status: "",
          content: "",
          image: "",
        });
      })
      .catch((res) => {
        setLoading(false);
        setProgress(100);
        toast.error("Something Went Wrong Please Try Again!");
      });
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
          <FeaturedImg
            onChange={handleOnChange}
            value={formValues.image}
            setProgress={setProgress}
          />
        </Grid>
        <Grid item lg={12} sm={12} xs={12} md={12} marginTop={2}>
          {location.pathname === "/dashboard/addBlog" ? (
            <LoadingButton
              variant="contained"
              className="blog-form-submit"
              loading={loading}
              endIcon={<Add />}
              onClick={() => handleAddClick()}
            >
              Add
            </LoadingButton>
          ) : (
            <LoadingButton
              variant="contained"
              className="blog-form-submit"
              loading={loading}
              endIcon={<Update />}
            >
              Update
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
