import React from "react";
import { useContext } from "react";
import modeContext from "../../context/modeContext";

export default function ThemeSwitcher() {
  // use the following context to get current theme mode
  const context = useContext(modeContext);
  const { mode, handleChange } = context;

  return (
    <div className="theme-switcher">
      <div
        className={`switch-light ${mode === "light" ? "switch-active" : ""}`}
        onClick={(e) => handleChange(e, "light")}
      >
        Light
      </div>
      <div
        className={`switch-dark ${mode === "dark" ? "switch-active" : ""}`}
        onClick={(e) => handleChange(e, "dark")}
      >
        Dark
      </div>
    </div>
  );
}
