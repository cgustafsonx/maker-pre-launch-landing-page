import React from "react";
import styles from "./FeatureText.module.css";

export default function FeatureText(props) {
  let className = `${styles.featuretext} ${props.className}`;

  return (
    <>
      <p className={className}>{props.children}</p>
    </>
  );
}
