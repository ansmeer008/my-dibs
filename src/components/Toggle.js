import classes from "./Toggle.module.css";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

export default function Toggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={classes.container}>
      <button onClick={toggleDarkMode}>
        <input
          className={classes.checkbox}
          type="checkbox"
          defaultChecked={darkMode ? true : false}
        ></input>
        <span
          className={`${classes.slider} ${darkMode ? "" : classes.unActive}`}
        ></span>
      </button>
    </div>
  );
}
