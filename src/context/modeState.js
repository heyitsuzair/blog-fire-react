import React, { useState } from "react";
import modeContext from "./modeContext";

export default function ModeState({ children }) {
  const [mode, setMode] = useState("light");
  const handleChange = (e, mode) => {
    if (mode === "dark") {
      setMode("dark");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      setMode("light");
    }
  };
  return (
    <modeContext.Provider value={{ handleChange, mode }}>
      {children}
    </modeContext.Provider>
  );
}
