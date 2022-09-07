import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Dashboard, Book, Add, ArrowBack, Menu } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import userContext from "../../../context/userContext";
export default function Sidebar({ open, setOpen }) {
  // use the following context to logout the user when someone clicks on logout menu item
  const user_context = useContext(userContext);
  const { Logout } = user_context;

  // use the following location to get the current pathname and than match it too paths array of objects containing "to". If the "to" and "pathname" match, make the menu item active
  const location = useLocation();
  const paths = [
    {
      to: "/dashboard",
      icon: <Dashboard />,
      text: "Dashboard",
    },
    {
      to: "/dashboard/blogs",
      icon: <Book />,
      text: "Blogs",
    },
    {
      to: "/dashboard/addBlog",
      icon: <Add />,
      text: "Add Blog",
    },
    {
      to: "/",
      icon: <ArrowBack />,
      text: "Bloggar",
    },
  ];

  const handleCollapse = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <div className={`sidebar ${open === true ? "open" : "close"}`}>
      <Grid container flexDirection="column" gap={3}>
        <Grid
          item
          lg={12}
          className="menu-item-db collapse"
          onClick={() => handleCollapse()}
        >
          <Link to={location.pathname}>
            <Menu />
          </Link>
        </Grid>
        {paths.map((path, index) => {
          return (
            <Link
              to={path.to}
              className={`menu ${
                location.pathname === path.to ? "active" : ""
              }`}
            >
              <Grid key={index} item lg={12} className="menu-item-db">
                {path.icon} {open === true ? path.text : ""}
              </Grid>
            </Link>
          );
        })}
        <Link to="/" onClick={() => Logout()}>
          <Grid item lg={12} className="menu-item-db logout active">
            <LogoutIcon /> {open === true ? "Logout" : ""}
          </Grid>
        </Link>
      </Grid>
    </div>
  );
}
