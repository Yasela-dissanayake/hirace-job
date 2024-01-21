import React from "react";
import classes from "./SeconndaryButton.module.css";

export default function SecondadryButton({ buttonText, className, ...props }) {
  return (
    <button className={`${classes.actionButton} ${className}`} {...props}>
      <div className={classes.buttonContent}>
        {buttonText}{" "}
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
    </button>
  );
}
