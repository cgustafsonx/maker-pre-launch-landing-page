import React from "react";
import styles from "./FeatureContent.module.css";

export default function FeatureContent(props) {
  let className = `${styles.content} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
