import React from "react";
import styles from "./MiddleContainer.module.css";

export default function MiddleContainer(props) {
  let className = `${styles.middle} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
