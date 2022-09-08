import React from "react";
import BlogForm from "../components/dashboard/Blog_Form/BlogForm";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";

export default function AddBlog() {
  return (
    <div className="add-blog">
      <BreadCrumb text="Add Blog" />
      <BlogForm />
    </div>
  );
}
