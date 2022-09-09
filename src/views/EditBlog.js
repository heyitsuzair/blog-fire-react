import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/dashboard/Blog_Form/BlogForm";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import userContext from "../context/userContext";

export default function AddBlog({ setProgress }) {
  const navigate = useNavigate();
  const user_context = useContext(userContext);
  const { user } = user_context;
  const getUser = localStorage.getItem("blog-user");

  useEffect(() => {
    //check if user is logged in or not and if the user is not logged in, navigate it to index
    if (getUser === null && user === null) {
      navigate("/");
      return;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="add-blog">
      <BreadCrumb text="Edit Blog" />
      {getUser === null ? "" : <BlogForm setProgress={setProgress} />}
    </div>
  );
}
