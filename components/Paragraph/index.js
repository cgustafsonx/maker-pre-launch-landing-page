import React from "react";
import styles from "./Paragraph.module.css";

export default function Paragraph(props) {
  let className = `${styles.paragraph} ${props.className}`;

  return <p className={className}>{props.children}</p>;
}
