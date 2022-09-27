import React from "react";
import styles from "./Hero.module.css";

export default function Hero(props) {
  let className = `${styles.hero} ${props.className}`;

  return (
    <div {...props} className={className}>
      {props.children}
    </div>
  );
}
