import React, { useState } from "react";
import { useEffect } from "react";
import modeContext from "./modeContext";

export default function ModeState({ children }) {
  const [mode, setMode] = useState();
  const handleChange = (e, mode) => {
    if (mode === "dark") {
      setMode("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    // set the default theme mode got from localStorage mode item
    setMode(
      localStorage.getItem("mode") === null
        ? "light"
        : localStorage.getItem("mode")
    );
    document.body.classList.add(localStorage.getItem("mode"));
    //eslint-disable-next-line
  }, []);

  return (
    <modeContext.Provider value={{ handleChange, mode }}>
      {children}
    </modeContext.Provider>
  );
}
