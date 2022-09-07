import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

export default function ModeState({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const Logout = () => {
    localStorage.removeItem("blog-user");
    setUser(null);
    navigate("/");
  };

  return (
    <userContext.Provider value={{ setUser, user, Logout }}>
      {children}
    </userContext.Provider>
  );
}
