import React from "react";
import styles from "./Highlight.module.css";

export default function Highlight(props) {
  let className = `${styles.span} ${props.className}`;

  return <span className={className}>{props.children}</span>;
}
