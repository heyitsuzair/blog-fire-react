import React, { useContext, useEffect } from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Table from "../components/dashboard/Table/Table";
import blogContext from "../context/blogContext";

export default function Blogs() {
  // purpose:to fetch blogs of logged in user
  const blog_context = useContext(blogContext);
  const { LoggedInUserBlogs, userBlogs } = blog_context;

  useEffect(() => {
    LoggedInUserBlogs();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="blogs">
      <BreadCrumb text="Blogs" />
      <div className="dashboard-table">
        <Table />
      </div>
    </div>
  );
}
