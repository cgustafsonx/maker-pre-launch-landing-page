import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
  let className = `${styles.header} ${props.className}`;

  return (
    <header {...props} className={className}>
      {props.children}
    </header>
  );
}
