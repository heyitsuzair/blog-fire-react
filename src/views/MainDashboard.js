import React, { useContext, useEffect } from "react";
import BreadCrumb from "../components/dashboard/Breadcrumb/BreadCrumb";
import Stats from "../components/dashboard/Stats/Stats";
import blogContext from "../context/blogContext";

export default function MainDashboard() {
  // logged in user info
  const getUser = JSON.parse(localStorage.getItem("blog-user"));

  // use the following context to get blog data including views, published blogs, draft blogs
  const blog_context = useContext(blogContext);

  const {
    LoggedInUserBlogs,
    blogsCalculation,
    totalViews,
    userBlogs,
    published,
  } = blog_context;

  useEffect(() => {
    LoggedInUserBlogs(getUser.email);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    blogsCalculation();
    //eslint-disable-next-line
  }, [userBlogs]);

  return (
    <div className="main-dashboard">
      <BreadCrumb text="Main" />
      <div className="dashboard-table">
        <Stats
          totalViews={totalViews}
          published={published}
          totalBlogs={userBlogs.length}
        />
      </div>
    </div>
  );
}
