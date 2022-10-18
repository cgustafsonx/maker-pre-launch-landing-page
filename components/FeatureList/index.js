import React from "react";
import styles from "./FeatureList.module.css";

export default function FeatureList(props) {
  let className = `${styles.container} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
