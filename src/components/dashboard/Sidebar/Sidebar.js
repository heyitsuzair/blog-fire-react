import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Dashboard, Book } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import userContext from "../../../context/userContext";
export default function Sidebar() {
  // use the following context to logout the user when someone clickes on logout menu item
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
  ];

  return (
    <div className="sidebar">
      <Grid container flexDirection="column" gap={3}>
        {paths.map((path, index) => {
          return (
            <Grid
              key={index}
              item
              lg={12}
              className={`menu-item-db ${
                location.pathname === path.to ? "active" : ""
              }`}
            >
              <Link to={path.to}>
                {path.icon} {path.text}
              </Link>
            </Grid>
          );
        })}
        <Grid item lg={12} className="menu-item-db">
          <Link to="/" onClick={() => Logout()}>
            <LogoutIcon /> Logout
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
