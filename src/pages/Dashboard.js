import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import MainDashboard from "../views/MainDashboard";
import Blogs from "../views/Blogs";
import userContext from "../context/userContext";
import AddBlog from "../views/AddBlog";
export default function Dashboard() {
  const navigate = useNavigate();
  const user_context = useContext(userContext);
  const { user } = user_context;
  const getUser = localStorage.getItem("blog-user");

  // state for collapse toggle
  const [open, setOpen] = useState(window.innerWidth < 768 ? false : true);

  useEffect(() => {
    //check if user is logged in or not and if the user is not logged in, navigate it to index
    if (getUser === null && user === null) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className="dashboard-sec"
        style={{ flex: `0 0 ${open === true ? "73%" : "88%"}` }}
      >
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/addBlog" element={<AddBlog />} />
        </Routes>
      </div>
    </div>
  );
}
