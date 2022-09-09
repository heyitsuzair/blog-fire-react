import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Header from "./Header";
import TextFieldComponent from "../../commons/TextField";
import MultipleSelect from "../../commons/MultipleSelect";
import TextEditor from "./TextEditor";
import FeaturedImg from "./FeaturedImg";
import blogFormContext from "../../../context/blogFormContext";
import { Add, Update } from "@mui/icons-material";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import blogContext from "../../../context/blogContext";

export default function BlogForm({ setProgress }) {
  // use the following location to check whether it is add blog or update blog page
  const location = useLocation();

  // form values context
  const form_context = useContext(blogFormContext);
  const { setFormValues, formValues } = form_context;

  // state to check if change image buttom is clicked or not
  const [changeImage, setChangeImage] = useState(false);

  // Blog Main Context For CRUD
  const blog_context = useContext(blogContext);
  const { addBlog, updateBlog } = blog_context;

  // multiple select values
  const categories = ["Design", "Technology", "SEO"];
  const status = ["Published", "Pending", "Draft"];

  // logged in user info
  const user = JSON.parse(localStorage.getItem("blog-user"));

  // Edit Area Start

  // getting the "id" parameter currently in address bar
  const { id } = useParams();

  // loading button state
  const [loading, setLoading] = React.useState(false);

  // Edit Area End

  // on change form values
  const handleOnChange = (e) => {
    if (e.target.name === "image") {
      setChangeImage(true);
    }
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // handle when clicked on add button
  const handleAddClick = async () => {
    // validations to check if anything is null
    if (formValues.title === "") {
      toast.error("Please Enter The Title!");
      return;
    } else if (formValues.category.length < 1) {
      toast.error("Please Select The Category!");
      return;
    } else if (formValues.slug === "") {
      toast.error("Please Enter The Slug!");
      return;
    } else if (formValues.status === "") {
      toast.error("Please Select The Status!");
      return;
    } else if (
      formValues.content === "" ||
      formValues.content === "<p><br></p>"
    ) {
      toast.error("Content Cannot Be Empty!");
      return;
    } else if (formValues.image === "") {
      toast.error("Please Upload Featured Image!");
      return;
    }
    // setting button loading to true
    setLoading(true);

    setProgress(0);
    // initializing form data
    const formData = new FormData();

    setProgress(30);

    // appending "upload_preset" and "file" for cloudinary upload

    formData.append("file", formValues.image);
    formData.append("upload_preset", "xgkxvbud");

    // uploading image to cloudinary
    await axios
      .post("https://api.cloudinary.com/v1_1/digaxe3sc/image/upload", formData)
      .then(async (res) => {
        setProgress(50);
        // Add a new document to firebase using "addBlog" function available in "blogState,js"
        addBlog(
          formValues.category,
          formValues.content,
          user.email,
          res.data.secure_url,
          formValues.slug,
          formValues.status,
          formValues.title,
          formValues.views,
          setFormValues,
          setProgress,
          setLoading
        );
      })
      .catch((res) => {
        setLoading(false);
        setProgress(100);
        toast.error("Something Went Wrong Please Try Again!");
      });
  };

  // handle when someone clicks on update button
  const handleUpdateClick = async () => {
    // validations to check if anything is null
    if (formValues.title === "") {
      toast.error("Please Enter The Title!");
      return;
    } else if (formValues.category.length < 1) {
      toast.error("Please Select The Category!");
      return;
    } else if (formValues.slug === "") {
      toast.error("Please Enter The Slug!");
      return;
    } else if (formValues.status === "") {
      toast.error("Please Select The Status!");
      return;
    } else if (
      formValues.content === "" ||
      formValues.content === "<p><br></p>"
    ) {
      toast.error("Content Cannot Be Empty!");
      return;
    } else if (formValues.image === "") {
      toast.error("Please Upload Featured Image!");
      return;
    }
    // check if the user clicked on change image or not, if not than update the data in firebase without changing image url else change data and image also
    if (changeImage === true) {
      // setting button loading to true
      setLoading(true);

      setProgress(0);
      // initializing form data
      const formData = new FormData();

      setProgress(30);

      // appending "upload_preset" and "file" for cloudinary upload
      formData.append("file", formValues.image);
      formData.append("upload_preset", "xgkxvbud");

      // uploading image to cloudinary
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/digaxe3sc/image/upload",
          formData
        )
        .then(async (res) => {
          setProgress(70);
          // updating document in firebase using "updateBlog" function available in "blogState.js"
          updateBlog(
            id,
            formValues.category,
            formValues.content,
            user.email,
            res.data.secure_url,
            formValues.slug,
            formValues.status,
            formValues.title,
            formValues.views,
            setProgress,
            setLoading,
            setChangeImage,
            // changing the values in state
            setFormValues({
              category: formValues.category,
              content: formValues.content,
              image: res.data.secure_url,
              status: formValues.status,
              title: formValues.title,
              views: formValues.views,
            })
          );
        })
        .catch((res) => {
          setLoading(false);
          setProgress(100);
          toast.error("Something Went Wrong Please Try Again Cloud!");
        });
    } else {
      // setting button loading to true
      setLoading(true);

      setProgress(0);
      setProgress(30);
      setProgress(70);

      updateBlog(
        id,
        formValues.category,
        formValues.content,
        user.email,
        formValues.image,
        formValues.slug,
        formValues.status,
        formValues.title,
        formValues.views,
        setProgress,
        setLoading,
        setChangeImage
      );
    }
  };

  useEffect(() => {
    //setting form value back to initial
    setFormValues({
      title: "",
      slug: "",
      category: [],
      status: "",
      content: "",
      image: "",
      views: 0,
    });
    //eslint-disable-next-line
  }, []);

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
              onClick={() => handleUpdateClick()}
            >
              Update
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
