import React from "react";
import styles from "./Icon.module.css";

export default function Icon(props) {
  let className = `${styles.icon} ${props.className}`;

  return (
    <div>
      <img src={props.img} alt="products" className={className} />
      {props.children}
    </div>
  );
}
