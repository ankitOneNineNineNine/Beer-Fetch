import React from "react";
import classes from "./Tooltip.module.css";

/**
 *
 * @param {string} text
 * @returns JSX.Element
 */
export const Tooltip = ({ text }) => {
  return <div className={classes.tooltip}>{text}</div>;
};
