import React from "react";
import styles from "./HeroContainer.module.css";

export default function HeroContainer(props) {
  let className = `${styles.container} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
