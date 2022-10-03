import React from "react";
import styles from "./FeatureContainer.module.css";

export default function FeatureContainer(props) {
  let className = `${styles.feature} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
