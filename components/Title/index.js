import React from "react";
import styles from "./Title.module.css";

export default function Title(props) {
  let className = `${styles.title} ${props.className}`;

  return <h1 className={className}>{props.children}</h1>;
}
