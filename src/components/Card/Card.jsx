import React, { useState } from "react";
import { Tooltip } from "../Tolltip/Tooltip";
import classes from "./Card.module.css";

/**
 *
 * @param {string} ingredients
 * @param {string} description
 * @param {string} image
 * @param {string} tagline
 * @param {string} name
 * @returns JSX.Element
 */
export const Card = ({ ingredients, description, image, tagline, name }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className={classes["card-container"]}>
      <div
        className={classes["image-container"]}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && <Tooltip text={`ingredients: ${ingredients}`} />}
        <img src={image} alt={name} />
      </div>
      <div className={classes["description-container"]}>
        <p className={classes["name"]}>{name}</p>
        <p className={classes["tag-line"]}>{tagline}</p>
        <p className={classes["description"]}>{description}</p>
      </div>
    </div>
  );
};
