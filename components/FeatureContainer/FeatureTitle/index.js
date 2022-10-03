import React from "react";
import styles from "./FeatureTitle.module.css";

export default function FeatureTitle(props) {
  let className = `${styles.featuretitle} ${props.className}`;

  return (
    <>
      <h1 className={className}>{props.children}</h1>
    </>
  );
}
