import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import MainDashboard from "../views/MainDashboard";
import Blogs from "../views/Blogs";
import userContext from "../context/userContext";
export default function Dashboard() {
  const navigate = useNavigate();
  const user_context = useContext(userContext);
  const { user } = user_context;
  const getUser = localStorage.getItem("blog-user");

  useEffect(() => {
    //check if user is logged in or not and if the user is not logged in, navigate it to index
    if (getUser === null && user === null) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}
