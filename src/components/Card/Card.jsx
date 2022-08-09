import React, { useRef, useState } from "react";
import { colors } from "../../infrastructure/colors/colors";
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
  const containerRef = useRef(null);
  return (
    <div
      className={classes["card-container"]}
      ref={containerRef}
      onMouseEnter={(e) =>
        (containerRef.current.style.background = colors["dim-blue"])
      }
      onMouseLeave={() =>
        (containerRef.current.style.background = colors.white)
      }
    >
      <div
        className={classes["image-container"]}
        onMouseEnter={() => {
          setShowTooltip(true);
          containerRef.current.style.background = colors.white;
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
          containerRef.current.style.background = colors["dim-blue"];
        }}
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
