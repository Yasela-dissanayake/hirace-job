import React from "react";
import classes from "./PrimaryButton.module.css";

export default function PrimaryButton({ buttonText, className, ...props }) {
  return (
    <button className={`${classes.actionButton} ${className}`} {...props}>
      <div className={classes.buttonContent}>
        {buttonText}{" "}
        <span class="material-symbols-outlined">chevron_right</span>
      </div>
    </button>
  );
}
