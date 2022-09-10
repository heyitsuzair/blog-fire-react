import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import MainDashboard from "../views/MainDashboard";
import Blogs from "../views/Blogs";
import userContext from "../context/userContext";
import AddBlog from "../views/AddBlog";
import LoadingBar from "react-top-loading-bar";
import EditBlog from "../views/EditBlog";
export default function Dashboard() {
  const navigate = useNavigate();
  const user_context = useContext(userContext);
  const { user } = user_context;
  const getUser = localStorage.getItem("blog-user");

  const [progress, setProgress] = useState(0);

  // state for collapse toggle
  const [open, setOpen] = useState(window.innerWidth < 768 ? false : true);

  useEffect(() => {
    //check if user is logged in or not and if the user is not logged in, navigate it to index
    if (getUser === null && user === null) {
      navigate("/");
      return;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard">
      <Sidebar open={open} setOpen={setOpen} />
      <LoadingBar color="var(--color-primary)" progress={progress} height={3} />
      <div style={{ flex: `0 0 ${open === true ? "73%" : "88%"}` }}>
        <Routes>
          <Route
            path="/"
            element={<MainDashboard setProgress={setProgress} />}
          />
          <Route path="/blogs" element={<Blogs setProgress={setProgress} />} />
          <Route
            path="/addBlog"
            element={<AddBlog setProgress={setProgress} />}
          />
          <Route
            path="/editBlog/:id"
            element={<EditBlog setProgress={setProgress} />}
          />
        </Routes>
      </div>
    </div>
  );
}
