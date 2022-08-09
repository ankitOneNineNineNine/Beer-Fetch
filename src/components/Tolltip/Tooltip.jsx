import React from "react";
import classes from "./Tooltip.module.css";
export const Tooltip = ({ text }) => {
  return <div className={classes.tooltip}>{text}</div>;
};
